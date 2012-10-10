//Example 5-24. Using process.nextTick( ) to insert callbacks into the event loop
var http = require('http');
var s = http.createServer(function(req, res) {
  res.writeHead(200, {});
  res.end('foo');
  console.log('http response');
  process.nextTick(function() {
    console.log('tick');
  });
});

s.listen(8000);

process.nextTick(function() {
  console.log('tick');
});