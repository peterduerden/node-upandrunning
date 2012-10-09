// Example 4-10. Simple HTTP GET requests
// Example 4-11. Comparing raw Buffer output to output with a specified encoding
var http = require('http');

var opts = {
  host: 'www.google.co.uk',
  port: 80,
  path: '/'
};

var req = http.get(opts, function(res) {
  console.log(res);
  res.setEncoding('utf8');
  res.on('data', function(data) {
    console.log('<Buffer>\n' + data + '\n\n\n');  
  });
});