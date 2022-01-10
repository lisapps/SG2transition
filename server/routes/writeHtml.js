const path = require("path");
const fs = require("fs");
const prettier = require("prettier");

// output html from react script
async function writeHtml(fileName, htmlString, jScripts) {
  let scriptsHTML = "";
  let scriptsArr = [];
  let copyScriptList = [];

  if (jScripts) {
    jScripts.map((scr) => {
      let str = '<script src="' + scr + '"></script>';
      scriptsArr.push(str);
    });
    jScripts.forEach((scr) => {
      if (
        !scr.includes("rexus") &&
        !scr.includes("flexTiles") &&
        !scr.includes("cuid") &&
        !scr.includes("gridFlex") &&
        !scr.includes("productGallery3")
      ) {
        let scrPath = path.resolve(
          __dirname,
          "./../../client/src/user-interface/Website/3_sections/S_" + fileName + "/" + scr,
        );
        let scriptObj = { path: scrPath, name: scr };
        // console.log("scriptObj: ", scriptObj);
        copyScriptList.push(scriptObj);
      }
    });
  }

  scriptsArr.length > 0 && (scriptsHTML = scriptsArr.join(""));
  //   console.log("scriptsHTML: ", scriptsHTML);
  let cleanstr = htmlString.replace(/<\/section>.*/, "</section>");
  cleanstr = cleanstr.replace(/.*<section/, "<section");
  //   console.log("cleanstr: ", cleanstr);

  let topHTML =
    // '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="stylesheet" href="../kingston.css"><title>In page navigation</title></head><body id="iframe-body" style="overflow: hidden;">';
    '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="stylesheet" href="https://styleguide.kingston.com/css/kingston/"><title>In page navigation</title></head><body id="iframe-body" style="overflow: hidden;">';
  let botHTML = "</body></html>";
  let htmlWDoc = topHTML + cleanstr + scriptsHTML + botHTML;
  let dirPath = path.resolve(__dirname, "./../../client/public/static/");
  var dir = dirPath + "/" + fileName;

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  let outputFile = dir + "/" + fileName + ".html";
  let prettyHtml = prettier.format(htmlWDoc, { parser: "html" });

  if (prettyHtml) {
    fs.writeFileSync(outputFile, prettyHtml);
    copyScriptList.forEach((scrObj) => {
      let destPath = dirPath + "/" + fileName + "/" + scrObj.name;
      console.log("destPath: ", destPath);
      fs.copyFile(scrObj.path, destPath, (err) => {
        if (err) console.log(err);
        return "Fail";
      });
    });

    console.log("inside success");
    return "Success";
  } else {
    return "Fail";
  }
}
exports.writeHtml = writeHtml;
