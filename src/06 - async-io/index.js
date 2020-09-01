var fs = require("fs");

fs.readFile("sample.json", "utf8", function (err, data) {
  console.log(data);
});

fs.readFile("sample2.txt", "utf-8", function (err, data) {
  console.log(data);
});

for (var i = 0; i < 10; i++) {
  console.log(i);
}
