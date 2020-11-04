const http = require('http');
const formidable = require('formidable');

http.createServer(function(req, res) {
  switch (req.method) {
    case 'GET':
      show(req, res);
      break;
    case 'POST':
      upload(req, res);
      break;
  }
}).listen(5001, function() {
  console.log('photo sharing app is listening on port 5001');
});

function show(req, res) {
  var html = `
    <form method="POST" action="/" enctype="multipart/form-data">
      <p><input type="text" name="name" /></p>
      <p><input type="file" name="file" /></p>
      <p><input type="submit" value="Upload" /></p>
    </form>
  `;
  
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Content-Length', Buffer.byteLength(html));
  res.end(html);
}

function upload(req, res) {
  if (!isFormData(req)) {
    res.statusCode = 400;
    res.end('Bad Request');
    return;
  }

  var form = new formidable.IncomingForm();

  form.on('field', function(field, value) {
    console.log(field);
    console.log(value);
  });

  form.on('file', function(name, file) {
    console.log(name);
    console.log(file);
  });

  form.on('end', function() {
    res.end('Upload complete');
  });

  form.on('progress', function(bytesReceived, bytesExpected) {
    var percent = Math.floor(bytesReceived / bytesExpected * 100);
    console.log(percent + '%');
  });

  form.parse(req);
}

function isFormData(req) {
  var type = req.headers['content-type'] || ''
  return type.indexOf('multipart/form-data') === 0;
}
