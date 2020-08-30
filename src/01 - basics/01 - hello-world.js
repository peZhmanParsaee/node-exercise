var http = require("http");
var util = require("util");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("hello world");
  })
  .listen(8421);

util.log("Server running on 8421");
