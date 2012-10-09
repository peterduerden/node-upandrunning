//Example 4-9. Creating an HTTP request
var http = require('http');

var opts = {
  host: 'www.google.co.uk',
  port: 80,
  path: '/',
  method: 'GET'
};

var req = http.request(opts, function(res) {
  console.log(res);
  res.on('data', function(data) {
    console.log(data);
  });
});

req.end(); // Call to initiate request, else will wait expecting POST data.