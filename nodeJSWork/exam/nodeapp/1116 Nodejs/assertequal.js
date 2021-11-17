var assert = require('assert');
// ==과 같은 경우

assert.equal(50,50); //ok
assert.equal(50, "50"); //ok
assert.equal(50, 70, "Each number is not equal"); //Error