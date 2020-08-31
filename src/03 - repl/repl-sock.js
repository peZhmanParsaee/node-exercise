var repl = require("repl"),
  net = require("net");

repl.start("node via stdin>", null, null, null, true);

// telnet 127.0.0.1 8124
net
  .createServer(function (socket) {
    repl.start("node via TCP socket>", socket);
  })
  .listen(8124);
