//Example 4-19. Reading and deleting a file asynchronously using nested callbacks
var fs = require('fs');

fs.readFile('warandpeace.txt', function(e, data) {
  console.log('War and Peace: ' + data);
  // Delete only occurs after the file read has completed.
  fs.unlink('warandpeace.txt');
});