const letterPositions = require('../letterPositions');
const assert = require('chai').assert;

describe('#letterPositions', () => {

  it('Given ("hello"))["h"], should return [0]', () => {
    assert.deepEqual(letterPositions('hello').h, [0]);
  });

  it('Given ("hello"))["e"], should return [1]', () => {
    assert.deepEqual(letterPositions('hello').e, [1]);
  });

  it('Given ("hello"))["l"], should return [2, 3]', () => {
    assert.deepEqual(letterPositions('hello').l, [2, 3]);
  });

  it('Given ("hello"))["o"], should return [4]', () => {
    assert.deepEqual(letterPositions('hello').o, [4]);
  });
});


// assertArraysEqual((letterPositions('hello'))['h'], [0]);
// assertArraysEqual((letterPositions('hello'))['e'], [1]);
// assertArraysEqual((letterPositions('hello'))['l'], [2, 3]);
// assertArraysEqual((letterPositions('hello'))['o'], [4]);
