const express = require("express");
const router = express.Router();
// var path = require("path");

const { writeHtml } = require("./writeHtml");

router.route("/output-html").post((req, res) => {
  var fileName = req.body.fileName;
  var htmlString = req.body.htmlString;
  var jScripts = req.body.scripts;

  if (htmlString) {
    writeHtml(fileName, htmlString, jScripts)
      .then((value) => {
        value == "Success" ? res.json({ status: "Success" }) : res.json({ status: "Fail" });
        console.log("writeHtml value: ", value);
      })
      .catch((error) => console.log(error));
  }
});

// const testAPIRouter = require("./testAPI");
// router.use("/testRoute", testAPIRouter);

module.exports = router;
