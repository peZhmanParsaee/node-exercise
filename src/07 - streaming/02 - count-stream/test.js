const assert = require("assert");
const fs = require("fs");
const CountStream = require("./count-straem");

const countStream = new CountStream("example");

var passed = 0;

countStream.on("total", function (count) {
  assert.equal(count, 1);
  passed++;
});

fs.createReadStream(__filename).pipe(countStream);

process.on("exit", function () {
  console.log("Assertions passed: ", passed);
});
