//Example 4-22. Creating a 3-byte Buffer from an array of octets

var color = new Buffer([255, 0, 149]);
console.log('\nCreating a 3-byte Buffer from an array of octets');
console.log(color); // <Buffer ff 00 95>

//Example 4-23. Creating a Buffer using byte length

var newBuffer = new Buffer(10);
console.log('\nCreating a Buffer using byte length');
console.log(newBuffer); // Contains random data from memory.

//Example 4-24. Creating Buffers using strings
console.log('\nCreating Buffers using strings');
console.log(new Buffer('foobarbaz'));
console.log(new Buffer('foobarbaz', 'ascii'));
console.log(new Buffer('foobarbaz', 'utf8'));
console.log(new Buffer('é'));
console.log(new Buffer('é', 'utf8'));
console.log(new Buffer('é', 'ascii'));