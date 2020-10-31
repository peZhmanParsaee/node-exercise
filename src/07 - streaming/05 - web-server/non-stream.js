const http = require("http");
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile(__dirname + '/index.html', (err, buf) => {
    if (err) {
      res.statusCode = 500;
      res.end(String(err));
    } else {
      // res.write(buf);
      // res.end();

      res.end(buf);
    }
  });
});

server.on("connection", (socket) => {
  console.log("new connection");
});

server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request');
});

const port = 3001;

server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
