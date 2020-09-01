var fs = require("fs");

var startTime = Date.now();

fs.writeFile("./test.txt", "test", function (err) {
  if (err) {
    console.log(err);
  }

  console.log("1 Done: ", (Date.now() - startTime) / 1000);
});

fs.writeFile("./test2.txt", "test", function (err) {
  if (err) {
    console.log(err);
  }

  console.log("2 Done: ", (Date.now() - startTime) / 1000);
});

fs.writeFile("./test3.txt", "test", function (err) {
  if (err) {
    console.log(err);
  }

  console.log("3 Done: ", (Date.now() - startTime) / 1000);
});

fs.writeFile("./test4.txt", "test", function (err) {
  if (err) {
    console.log(err);
  }

  console.log("4 Done: ", (Date.now() - startTime) / 1000);
});
