//Example 5-5. The lifespan of hashes and getting hex output
var crypto = require('crypto');
var md5 = crypto.createHash('md5');

md5.update('foo');
console.log(md5.digest()); //'¬1⁄2\u0018ÛLÂø\\íïeOÌÄ¤Ø'

var md5 = crypto.createHash('md5');
md5.update('foo');
console.log(md5.digest('hex'));
