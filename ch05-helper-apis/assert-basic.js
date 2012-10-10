//  Example 5-37. Basic assertions.

var assert = require('assert');

console.log(assert.equal(1, true, 'Truthy'));
console.log(assert.notEqual(1, true, 'Truthy'));