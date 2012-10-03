var express = require('express');

console.log('Creating express server...');
var app = express.createServer();
console.log('Express server created.');

app.get('/', function(req, res) {
  console.log('GET /');
  res.send('Welcome to Node Twitter');
});

app.listen(8000);
console.log('Express listening on http://127.0.0.1:8000/');

