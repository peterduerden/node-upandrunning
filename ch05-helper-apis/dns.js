//Example 5-1. Calling dns.resolve()
var dns = require('dns');

dns.resolve('yahoo.com', 'A', function(error, records) {
	if (error) {
		console.log(error);
	} else {
		console.log(records);
	}
});

//Example 5-2. Using resolve() versus resolveMx()
dns.resolve('microsoft.com', 'MX', function(error, records) {
	if (error) {
		console.log(error);
	} else {
		console.log(records);
	}
});

dns.resolveMx('dowjones.com', function(error, records) {
	if (error) {
		console.log(error);
	} else {
		console.log(records);
	}
});

//Example 5-3. Looking up a single A record with lookup()
//DNS.lookup(domain, IP [4|6], callback)
dns.lookup('google.com', 4, function(error, address) {
	if (error) {
		console.log(error);
	} else {
		console.log(address);
	}
});