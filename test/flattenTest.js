const flatten = require('../flatten');
const assert = require('chai').assert;

// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]),  [1, 2, 3, 4, 5, 6]);
describe('#flatten', () => {

  it('Given [1, 2, [3, 4], 5, [6]]),  return [1, 2, 3, 4, 5, 6]', () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });

});