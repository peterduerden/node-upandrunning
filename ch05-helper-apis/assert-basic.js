//  Example 5-37. Basic assertions.

var assert = require('assert');

assert.equal(1, true, '1 is equal to true'); // ==
assert.notEqual(1, false, '1 is not equal to false'); // !=

var isTrue = true;
var isFalse = false;
assert.strictEqual(isTrue, true, 'isTrue is identical to true'); // ===
assert.notStrictEqual(isFalse, true, 'isFalse is not identical to true'); // !===

