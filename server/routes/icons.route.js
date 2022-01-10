const express = require("express");
const router = express.Router();
const path = require("path");
const pug = require("pug");
const {readFileSync} = require("fs");
const ENV = process.env.NODE_ENV || "dev";

const sharp = require("sharp");
const { Readable } = require("stream");
const xmldom = require("xmldom");

const globFiles = require("../services/Glob.service");
const { profile } = require("console");
let iconsPattern = path.join(__dirname,"../__src/assets/icons/*.svg");
let iconsGlob = globFiles(iconsPattern);
let iconset = {
    "index": {}
};
var Rexus;

function iconParse(icon, index) {
    let _id = getIconId(icon.file);
    iconset.index[_id] = index;
	return {
		"id": _id,
		"name": getIconName(icon.file),
		"data": readFileSync(icon.path, 'utf8'),
		"path": icon.path
	}
}
//-- ^^ Map Dependency ^^ :: Returns an id based on filename (converts spaces to "-")
function getIconId(str) {
	str = str.replace(".svg","");
	str = str.toLowerCase();
	return str.replace(/[\.\s]/g,"-");
}
//-- ^^ Map Dependency ^^ :: Returns a name based on filename (preserves spaces)
function getIconName(str) {
	str = str.replace(".svg","");
	return str.replace(/[-]/g," ")
}
iconset.db = iconsGlob.map(iconParse);

function buildCurrentRoutes(path) {
    /*
        Correct the paths for each template
        to match the current scope (brand) selected
    */
    path = path.match(/[a-z-]+/g);
    path = (path) ? path.join("/") : "";
    let a = Rexus.profiles.length - 1;
    let output = [];
    let brand, domain, query, profile;
    for(a; a >= 0; a--) {
        profile = Rexus.profiles[a];
        brand = profile.name.toLowerCase();
        if(profile.hidden) continue;
        if(ENV == "dev") {
            domain = "";
            query = "?brand=" + brand;
        } else {
            domain = profile.domain;
            query = "";
        }
        output.push({
            "url": domain + "/" + path + query,
            "title": profile.name,
            "abbv": profile.abbreviated
        })
    }
    return output;
}

function getURLQuery(queries) {
    
    /* 
        Converts the query object into a
        URL formatted query "?var=val1&var2=val2"
    */
    let parsedQueries = Object.entries(queries);
    
    if(parsedQueries.length>0) {
        let a = parsedQueries.length - 1;
        let output = "?";
        let query;

        for(a; a>=0; a--) {
            query = parsedQueries[a];
            output += "&" + (query[0] + "=" + query[1]);
        }

        return output.replace("&","");
    } else return "";
}

router.route("/download")
	.post((req, res) => {
		let iconObj = iconset.db[req.body.id];
		let icon = new xmldom.DOMParser().parseFromString(iconObj.data, 'text/xml');
		let svgList = icon.getElementsByTagName('svg');
		if (!svgList) throw new Error(`No SVG in ${iconObj}`);

		let pngFormat = (req.body.iconFormat=="png") ? true : false;
		let scaleSize = parseInt(req.body.iconSize, 10);
		let upscale = pngFormat ? Math.round(scaleSize*2) : scaleSize;
		let svg = svgList.item(0);

		svg.setAttribute('width', upscale+'px');
		svg.setAttribute('height', upscale+'px');
		svg.setAttribute('fill', req.body.iconColor);
		
		const readable = Readable.from(new xmldom.XMLSerializer().serializeToString(icon));

        if(pngFormat) {
            const resizedPNG = sharp().resize(scaleSize).png();
            res.set('Content-Type', 'image/png');
            res.set("Content-Disposition", 'attachment; filename="' + iconObj.id + '.png"')
            readable.pipe(resizedPNG).pipe(res);
        } else {
            res.set('Content-Type', 'image/svg+xml');
            res.set("Content-Disposition", 'attachment; filename="' + iconObj.id + '.svg"')
            readable.pipe(res);
        }
	});

router.route("/:id?/:size?/:color?")
	.get((req, res) => {
        let _id = req.params.id ? req.params.id : null;
        let _size = req.params.size ? req.params.size : null;
        let _color = req.params.color ? req.params.color : null;
        if(_id) {
            let icon = iconset.db[iconset.index[_id]]["data"];
            let iconData = new xmldom.DOMParser().parseFromString(icon, 'text/xml');
            let svg = iconData.getElementsByTagName('svg').item(0);

            if(_size) {
                svg.setAttribute('width', _size+'px');
                svg.setAttribute('height', _size+'px');
            }
            if(_color) svg.setAttribute('fill', "#"+_color);

            const readable = Readable.from(new xmldom.XMLSerializer().serializeToString(iconData));
            res.set('Content-Type', 'image/svg+xml');
            readable.pipe(res);
            return;
        }


		Rexus = (Rexus) ? Rexus : req.app.get("rexus");
		var _queries = getURLQuery(req.query);

		// -- Determine brand base on domain hostname
        let hostname = req.hostname;
        let a = Rexus.profiles.length-1;
        let hostProfile, profileName, tmpBrand, _brand;

        // -- search for brand within hostname (styleguide.hyperxgaming.com)
        for(a; a>=0; a--) {
            hostProfile = Rexus.profiles[a];
            profileName = hostProfile.name.toLowerCase();
            if(hostname.indexOf(profileName)>=0 || profileName==req.query.brand) {
                _brand = profileName;
                break;
            } else if(hostProfile.default) {
                tmpBrand = profileName;
            }
        };

		// -- Conditional likely fires when testing locally, will resolve to default brand specified
        if(!_brand) {
            _brand = tmpBrand;
            res.redirect("icons?brand=" + _brand);
            return;
        }

        let outputData = {
            "brand": _brand,
            "nav": Rexus.navigation.links,
			"query": _queries,
            "profiles": buildCurrentRoutes(req.path),
			"icons": iconset.db
        };

		res.render("icons", outputData);
	})
	.post((req, res) => {
		let output = {
			"index": req.body.id,
            "host": req.hostname
		}
		Object.assign(output, iconset.db[req.body.id]);
		res.json({
			data: pug.renderFile("./__src/templates/_viewer/iconDetails.component.pug", output)
		});
	})

module.exports = router;