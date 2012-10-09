//Example 4-13. Parsing a URL using the URL module
var URL = require('url');
var myUrl = "http://www.nodejs.org/some/url/?with=query&param=that&are=awesome#alsoahash";

console.log(myUrl);
console.log('parseQueryString = NO\n' + JSON.stringify(URL.parse(myUrl)));
console.log('parseQueryString = YES\n' + JSON.stringify(URL.parse(myUrl, true)));
