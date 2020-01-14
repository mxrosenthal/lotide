const map = require('../map');
const assert = require('chai').assert;


const words = ["ground", "control", "to", "major", "tom"];


describe('#map', () => {

  it('', () => {
    assert.deepEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
  })

});