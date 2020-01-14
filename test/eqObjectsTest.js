const eqObjects = require('../eqObjects');
const assert = require('chai').assert;

describe('#eqObjects', () => {

  it('Given { a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })) // => false', () => {
    assert.isFalse(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }))
  });

  it('Given { a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })) // => false', () => {
    assert.isTrue(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }))
  });

  it('Given { a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })) // => false', () => {
    assert.isFalse(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })) // => false
  });

  it('Given { a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })) // => false', () => {
    assert.isTrue(eqObjects({ben: {ben: {ben: 'david'}}}, {ben: {ben: {ben: 'david'}}}))

  });
});