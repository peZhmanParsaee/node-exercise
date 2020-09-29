const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("hey you");
    res.end();
  }

  if (req.url === "/api/grades") {
    res.write(JSON.stringify([10, 20, 15]));
    res.end();
  }
});

server.on("connection", (socket) => {
  console.log("new connection");
});

server.listen(3000);

console.log(`server is listening on port 3000`);
