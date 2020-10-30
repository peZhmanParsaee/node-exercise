const http = require("http");
const CountStream = require("./count-straem");

const countStream = new CountStream("entity framework");

http.get("http://pezhmanparsaee.blogfa.com", function (res) {
  res.pipe(countStream);
});

countStream.on("total", function (count) {
  console.log("Total matches: ", count);
});
