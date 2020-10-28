// 255 bytes
// var buf = new Buffer(255);
var buf = Buffer.alloc(10);

// set value of first byte
buf[0] = 255;
buf[1] = 64;
buf[2] = "a";
buf[3] = 64;
buf[4] = 0x1;

console.log(buf);
console.log(buf.toString());
