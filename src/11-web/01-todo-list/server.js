const http = require('http');
const qs = require('querystring');

const todos = [];

http.createServer(function(req, res) {
  if (req.url === '/') {
    switch(req.method) {
      case 'GET':
        show(res);
        break;
      case 'POST':
        add(req, res);
        break;
      default:
        badRequest(res);
    }
  } else {
    notFound(res);
  }
}).listen(1024);

function show(res) {
  var html = `
    <html>
      <head>
        <title>Todo List</title>
      </head>
      <body>
        <h1>Todo List</h1>
        <ul>
          ${todos.map(todo => '<li>' + todo.item + ' ' + todo.priority + '</li>').join('')}
        </ul>
        <form method="POST" action="/">
          <p><input type="text" name="item" /></p>
          <p>
            <select name="priority">
              <option value="HIGH">high</option>
              <option value="LOW">low</option>
            </select>
          </p>
          <p><input type="submit" value="Add item" /></p>
        </form>
      </body>
    </html>
  `;

  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Content-Length', Buffer.byteLength(html));
  res.end(html);
}

function notFound(res) {
  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Not Found');
}

function add(req, res) {
  var body = '';
  req.setEncoding('utf-8');
  req.on('data', function(chunk) { body += chunk });
  req.on('end', function() {
    var obj = qs.parse(body);

    var {item, priority} = obj;
    todos.push({item, priority});

    show(res);
  });
}

function badRequest(res) {
  res.statusCode = 400;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Bad Request');
}
