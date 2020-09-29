const fs = require("fs");
const path = require("path");

function walk(dirPath, callback) {
  fs.readdir(dirPath, function (err, files) {
    if (err) {
      console.error(err);
    }

    files.forEach(function (name) {
      var filePath = path.join(dirPath, name);
      var stat = fs.statSync(filePath);

      if (stat.isFile()) {
        callback(filePath, stat);
      } else if (stat.isDirectory()) {
        walk(filePath, callback);
      }
    });
  });
}

function walkSync(dirPath, callback) {
  const files = fs.readdirSync(dirPath);
  files.forEach(function (name) {
    var filePath = path.join(dirPath, name);
    var stat = fs.statSync(filePath);

    if (stat.isFile()) {
      callback(filePath, stat);
    } else if (stat.isDirectory()) {
      walkSync(filePath, callback);
    }
  });
}

walk(".", function (filePath, stat) {
  console.log(filePath);
});

walkSync(".", function (filePath, stat) {
  console.log(filePath);
});
