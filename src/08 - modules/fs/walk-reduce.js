const fs = require("fs");
const path = require("path");

// function fileList(dir) {
//   return fs.readdirSync(dir).reduce(function (list, file) {
//     var name = path.join(dir, file);
//     var isDir = fs.statSync(name).isDirectory();
//     return list.concat(isDir ? fileList(name) : [name]);
//   }, []);
// }

// var DIR = "/usr/local";

// fileList(DIR);

// String -> [String]
function fileList(dir) {
  return fs.readdirSync(dir).reduce(function (list, file) {
    var name = path.join(dir, file);
    var isDir = fs.statSync(name).isDirectory();
    return list.concat(isDir ? fileList(name) : [name]);
  }, []);
}

var DIR = ".";

// 1. List all files in DIR
fileList(DIR);
// => ['/usr/local/bin/babel', '/usr/local/bin/bower', ...]

// 2. List all file names in DIR
fileList(DIR).map((file) => file.split(path.sep).slice(-1)[0]);
// => ['babel', 'bower', ...]
