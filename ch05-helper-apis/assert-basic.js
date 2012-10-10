//  Example 5-37. Basic assertions.

/* Falsy
 * 
 * false
 * 0
 * null
 * undefined
 * empty string
 * NaN
 *
 * Everything else is truthy!
 */

var assert = require('assert');

assert.equal(1, true, '1 is equal to true'); // ==
assert.notEqual(1, false, '1 is not equal to false'); // !=

var TRUE = true;
var FALSE = false;

assert.strictEqual(TRUE, true, 'TRUE is identical to true'); // ===
assert.notStrictEqual(FALSE, true, 'FALSE is not identical to true'); // !===

var someString = 'A non-empty string';
var object = {};

assert.ok(someString, 'Strings that are not empty are truthy'); // ==
assert.ok(object, 'An object is truthy');