var http = require('http'),
  assert = require('assert');
  
var opts = {
  host: 'localhost',
  port: 8000,
  path: '/send',
  method: 'POST',
  headers: {'content-type':'application/x-www-form-urlencoded'}
};

var req = http.request(opts, function(res){
  res.setEncoding('utf8');
  
  var data = '';
  res.on('data', function(d) {
    console.log(d);
    data += d;
  });
  
  res.on('end', function() {
    var json = "{\n" +
      "  \"status\": \"ok\",\n" +
      "  \"message\": \"Tweet received\"\n}";
    assert.strictEqual(data, json);
  });
});

req.write('tweet=test');
req.end();
