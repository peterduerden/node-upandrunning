// Example 4-18. Reading and deleting a file asynchronously—but all wrong
var fs = require('fs');

fs.readFile('warandpeace.txt', function(e, data) {
  console.log('War and Peace: ' + data);
});

fs.unlink('warandpeace.txt');