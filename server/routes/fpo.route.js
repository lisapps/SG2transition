const express = require("express");
const router = express.Router();

router.route("/:width?/:height?")
    .get((req, res) => {
        let locals = {};

        //-- SVG PROPERTIES
        let logoProperties = {
            "width": 440,
            "height": 90,
            "minWidth": 60,
            "proportion": 0.25
        };

        let _width = (req.params.width) ? parseInt(req.params.width, 10) : 150;
        if(_width) locals.width = _width;

        let _height = (req.params.height) ? parseInt(req.params.height, 10) : null;
        if(_height) locals.height = _height;
        else locals.height = _width;

        //-- Calculate size/position of logo
        let logoNewScale;
        let logoDownscale = _width*0.25/logoProperties.width;
        let logoWidthInPx = logoProperties.width*logoDownscale;

        if(logoWidthInPx<logoProperties.minWidth) logoNewScale = logoProperties.minWidth/logoProperties.width;
        else logoNewScale = logoWidthInPx/logoProperties.width;

        locals.logoScale = logoNewScale;
        locals.logoY = locals.height - (logoProperties.height*logoNewScale) - 5;
        locals.textSize = (_width*0.14)+"px";

        res.set('Content-Type', 'image/svg+xml');
        res.render("fpo", locals);
    })

module.exports = router;