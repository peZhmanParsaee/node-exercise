var http = require("http");
var fs = require("fs");

function writeNumbers(res) {
  var counter = 0;

  for (var i = 0; i < 100; i++) {
    counter++;
    res.write(counter.toString(), "\n");
  }
}

http
  .createServer(function (req, res) {
    var query = require("url").parse(req.url).query;
    var app = require("querystring").parse(query).file + ".txt";

    res.writeHead(200, { "content-type": "text/plain" });

    writeNumbers(res);

    // timer to open file and read contents
    setTimeout(function () {
      console.log("openning " + app);
      fs.readFile(app, "utf-8", function (err, data) {
        if (err) {
          res.write("Could not find or open file for reading\n");
        } else {
          res.write(data);
        }

        res.end();
      });
    }, 2000);
  })
  .listen(8421);

console.log("Server running at 8421");
