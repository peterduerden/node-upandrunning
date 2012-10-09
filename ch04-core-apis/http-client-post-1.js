// Example 4-12. Writing data to an upstream service
var http = require('http');

var options = {
  host: 'posttestserver.com',
  post: 80,
  path: '/post.php',
  method: 'POST'
};

var req = http.request(options, function(res) {
  res.setEncoding('utf8');
  res.on('data', function(chunk) {
    console.log('BODY: ' + chunk);
  });
});

req.write("my data");
req.write("more of my data");

req.end();