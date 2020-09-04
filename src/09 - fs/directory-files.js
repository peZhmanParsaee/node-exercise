const fs = require("fs");

fs.readdir(__dirname, function (err, files) {
  console.log(files);
});

var files = fs.readdirSync(".");
console.log(files);
