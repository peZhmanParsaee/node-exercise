#!/home/pezhman/.nvm/versions/node/v12.13.0/bin/node

var repl = require("repl");
var context = repl.start(">> ", null, null, null, true).context;

// preload in modules
context.http = require("http");
context.util = require("util");
context.os = require("os");
