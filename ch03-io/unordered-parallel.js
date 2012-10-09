var fs = require('fs');

fs.readFile('foo.txt', 'utf8', function(err, data) {
  if(err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

fs.readFile('bar.txt', 'utf8', function(err, data) {
  if(err) {
    console.log(err);
  } else {
    console.log(data);
  }
});