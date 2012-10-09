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

//Example 4-25. Buffer.write( ) and partial characters
console.log('\nBuffer.write() and partial characters');
var b = new Buffer(1);
console.log('Create buffer of 1 byte');
console.log(b);
b.write('a');
console.log('Write single ASCII character "a" (OK)');
console.log(b);
console.log('Write single UTF-8 2-byte character "é" (FAIL)');
b.write('é');
console.log(b);

//Example 4-26. Writing a string into a Buffer including a terminator
var buffer = new Buffer(5);
buffer.write('fffff');
console.log(buffer); //<Buffer 66 66 66 66 66>
buffer.write('ab');
console.log(buffer); //<Buffer 66 61 62 66 66>

/** But book says output will be <Buffer 66 61 62 00 66>
 *  As far as I can tell this was a problem prior to node 0.6.
 *  See https://github.com/joyent/node/pull/1902 for details.
 */