const http = require('http');
const fs = require('fs');
const zlib = require('zlib');

const port = 3002;
http.createServer((req, res) => {
  fs.createReadStream(__dirname + '/index2.html').pipe(res);
}).listen(port, () => {
  console.log(`serveer is listenin on port ${port}`);
});

const port2 = 3003;
http.createServer((req, res) => {
  res.writeHead(200, { 'content-encoding': 'gzip' });
  
  // readable.pipe(writable)
  var stream = fs.createReadStream(__dirname + '/inde.html');

  stream.on('error', (err) => {
    console.trace();
    console.error('Stack: ', err.stack);
    console.error('The error object: ', err);
  });

  stream.pipe(zlib.createGzip())
    .pipe(res);
}).listen(port2, () => {
  console.log(`compression serveer is listenin on port ${port2}`);
});
