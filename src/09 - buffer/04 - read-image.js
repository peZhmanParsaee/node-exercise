const fs = require("fs");

const filePath = __dirname + "/otis.jpeg";

fs.readFile(filePath, (err, buf) => {
  if (err) {
    console.error(err);
  }

  console.log(buf.toString("base64"));
});
