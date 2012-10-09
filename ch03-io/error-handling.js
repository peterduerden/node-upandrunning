var http = require('http');

var opts ={
  host: 'sfkjhkdshkdjhkjdshkj.com',
  port: 80,
  path: '/'
};

var req = http.get(opts, function(res) {
  console.log('This will never get called');
});

req.on('error', function(e) {
  console.log('Got that pesky error trapped');
});

/*
 * Wrong.
 * try-catch fails because http.get()
 * return ClientRequest object successfully.
try {
  http.get(opts, function(res) {
    console.log('Will this get called?');  
  });
}
catch (e) {
  console.log('Will we catch an error?');
}
 */