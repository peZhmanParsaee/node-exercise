var http = require("http");
var fs = require("fs");

function on_OpenAndReadFile(filename, res) {
  console.log("openning " + filename);

  fs.readFile(filename, "utf-8", function (err, data) {
    if (err) {
      res.write("Could not find or open file for reading\n");
    } else {
      res.write(data);
    }

    res.end();
  });
}

http
  .createServer(function (req, res) {
    res.writeHead(200, { "content-type": "text/plain" });

    setTimeout(on_OpenAndReadFile, 2000, "main.txt", res);
  })
  .listen(8421);
