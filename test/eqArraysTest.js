const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe('#eqArrays', () => {

  it('Given [1, 2, 3], [1, 2, 3] : true', () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it('Given [1, 2, 3], [3, 2, 1]) : false', () => {
    assert.deepEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });

  it('Given ["1", "2", "3"], ["1", "2", "3"]) : true)', () => {
    assert.deepEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
  });

  it('Given ["1", "2", "3"], ["1", "2", 3] : false', () => {
    assert.deepEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });

  it('Given [1, 2, 3], [1, 2, 4]), false', () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 4]), false);
  });

  it('Given [\'1\', \'2\', \'3\'], [\'1\', \'2\', \'3\']), true', () => {
    assert.deepEqual(eqArrays(['1', '2', '3'], ['1', '2', '3']), true);
  });

  it('Given [\'1\', \'2\', \'3\'], [\'1\', \'2\', 3]), false);', () => {
    assert.deepEqual(eqArrays(['1', '2', '3'], ['1', '2', 3]), false);
  });

  it('Given [2, 3], [4]], [[2, 3], [4, 5]]), false', () => {
    assert.deepEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
  });

  it('Given [[2, 3], [4]], [[2, 3], 4]), false', () => {
    assert.deepEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);
  });
});