var user = "john";
var password = "doe";

var authString = user + ":" + password;

var buf = Buffer.alloc(authString.length, authString);
console.log(buf.toString("utf-8"));

var encoded = Buffer.alloc(authString.length, authString).toString("base64");
console.log(encoded);

var decoded = Buffer.alloc(authString.length, encoded, "base64").toString(
  "utf-8"
);
console.log(decoded);
