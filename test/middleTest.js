const middle = require('../middle');
const assert = require('chai').assert;

describe('#middle', () => {

  it('Given an array [1, 2, 3]), should return [2]', () => {
    assert.deepEqual(middle([1, 2, 3]), [2])
  });

  it('Given an array [1, 2, 3]), should return [2]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [5, 6]);
  });

})