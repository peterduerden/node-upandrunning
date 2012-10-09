//Example 5-1. Calling dns.resolve( )
var dns = require('dns');

dns.resolve('yahoo.com', 'A', function(e,r) {
  if (e) {
    console.log(e);
  }
console.log(r);
});