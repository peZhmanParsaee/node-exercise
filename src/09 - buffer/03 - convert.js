const fs = require("fs");

const filePath = __dirname + "/names.txt";

fs.readFile(filePath, (err, buf) => {
  // convert into a UTF-8 string (default)
  console.log(buf.toString());
});

fs.readFile(filePath, (err, buf) => {
  // convert into an ascii string
  console.log(buf.toString("ascii"));
});

fs.readFile(filePath, { encoding: "ascii" }, (err, data) => {
  // non-UTF characters are shown weird
  console.log(data);
});
