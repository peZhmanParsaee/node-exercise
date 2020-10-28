const fs = require("fs");

const mime = "image/jpeg";
const encoding = "base64";

const data = fs.readFileSync(__dirname + "/otis.jpeg").toString(encoding);

const uri = `data:${mime};${encoding},${data}`;

console.log(uri);

const splittedData = uri.split(",")[1];

var buf = Buffer.from(splittedData, "base64");
fs.writeFileSync(__dirname + "/otis-2.jpeg", buf);
