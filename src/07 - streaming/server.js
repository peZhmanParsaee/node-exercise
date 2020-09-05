var http = require("http");
var fs = require("fs");

var server = http.createServer(function (req, res) {
  res.writeHead(200, { "content-type": "image/jpg" });

  fs.createReadStream("image.jpg").pipe(res);
});

server.listen(8421, function () {
  console.log("server is up and running on port 8421");
});
