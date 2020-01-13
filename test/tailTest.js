const tail = require('../tail');
const assert = require('chai').assert;

describe('#tail', () => {

  it('Given array.length <= 1 should return 0', () => {
    assert.strictEqual(tail([0]).length, 0);
  });

  it('Given array of length n should return n-1', () => {
    assert.strictEqual(tail(["Yo Yo", "Lighthouse", "Labs"]).length, 2);
  });

});
