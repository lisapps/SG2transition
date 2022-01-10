// ##### GLOB FILES ##### //
// Use this service to return a list of files (not directories)
// This service takes one "glob" parameter such as "/path/to/files/**.js"

const glob = require("glob");
var filePatt = /([a-zA-Z0-9-_.\s]+\..{2,4})/;

const globFiles = (patt) => {
  let _fileMatches = glob.sync(patt);
  let _output = [];
  let a = 0;
  let path, file;
  for (a = _fileMatches.length - 1; a >= 0; a--) {
    path = _fileMatches[a];
    file = filePatt.exec(path);
    let dir = path.split("/");
    dir.pop();
    dir = dir.join("/");

    if (file) file = file[0];
    else continue;

    _output[a] = {
      file: file,
      dir: dir,
      path: path,
    };
  }
  return _output;
};

module.exports = globFiles;
