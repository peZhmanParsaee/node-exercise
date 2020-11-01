const http = require('http');
const fs = require('fs');
const zlib = require('zlib');
const { join } = require('path');
const { parse } = require('url');

var root = __dirname;

const port = 3002;
http.createServer((req, res) => {
  console.log(req.headers);
  res.header('auth-token', 'asdfjsdjf');
  fs.createReadStream(root + '/index.html').pipe(res);
}).listen(port, () => {
  console.log(`serveer is listenin on port ${port}`);
});

const port2 = 3003;
http.createServer((req, res) => {
  res.writeHead(200, { 'content-encoding': 'gzip' });
  
  var stream = fs.createReadStream(root + '/index.html');

  stream.on('error', (err) => {
    console.trace();
    console.error('Stack: ', err.stack);
    console.error('The error object: ', err);
  });

  // readable.pipe(writable)
  stream
    .pipe(zlib.createGzip())
    .pipe(res);
}).listen(port2, () => {
  console.log(`compression server is listening on port ${port2}`);
});

const port3 = 3004;
http.createServer((req, res) => {
  var url = parse(req.url);
  var path = join(root, url.pathname);

  fs.stat(path, function(err, stats) {
    if (err) {
      if (err.code === 'ENOENT') {
        res.statusCode = 404;
        res.end('Not Found');
      } else {
        res.statusCode = 500;
        res.end('Internal Server Error');
      }
    } else {
      var stream = fs.createReadStream(path);
      stream.on('data', function(chunk) {
        res.write(chunk);
      });
      stream.on('error', function(err) {
        res.statusCode = 500;
        res.end('Internal Server Error');
      });
      stream.on('end', function() {
        res.end();
      });
    }
  });
}).listen(port3, () => {
  console.log(`another static web server is listening on port ${port3}`);
});
