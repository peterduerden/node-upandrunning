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

assert.strictEqual(isTrue, true, 'TRUE is identical to true'); // ===
assert.notStrictEqual(isFalse, true, 'FALSE is not identical to true'); // !===

var someString = 'A non-empty string';
var emptyString = '';

assert.ok(someString, 'Strings that are not empty are truthy'); // ==
assert.ok(0, 'Zero is not truthy')