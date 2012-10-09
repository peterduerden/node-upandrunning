//Example 4-15. Encoding an object into a query string
var qs = require('querystring');

var queryString = 'a=1&b=2&c=d';
console.log(qs.parse(queryString));

var myObj = {'a':1, 'b':5, 'c':'cats', 'func': function(){console.log('dogs')}};
console.log(qs.encode(myObj));