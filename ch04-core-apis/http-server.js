// Example 4-7. A simple, and very short, HTTP server
/**
 ** NOT GOOD CODING PRACTICE
require('http').createServer(function(req,res) {
  res.writeHead(200, {});
  res.end('hello world');
}).listen(8000);
**/

// Example 4-8. A simple, but more descriptive, HTTP server
var http = require('http');
var server = http.createServer();
var handleReq = function(req, res) {
  res.writeHead(200, {});
  res.end('hello world');
};

server.on('request', handleReq);
server.listen(8000);