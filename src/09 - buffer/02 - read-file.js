const fs = require("fs");

fs.readFile(__dirname + "/names.txt", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // data is buffer
  console.log(data);
  console.log(Buffer.isBuffer(data));
});
