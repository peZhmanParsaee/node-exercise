const repl = require("repl");
const msg = "message";

var r = repl.start();

// assign a writable / radable property to context
r.context.m = msg;

// read-only variable
Object.defineProperty(r.context, "m2", {
  configurable: false,
  enumerable: true,
  value: msg,
});
