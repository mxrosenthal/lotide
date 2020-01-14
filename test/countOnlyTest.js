const countOnly = require('../countOnly');
const assert = require('chai').assert;

const firstNames = [
  'Karl',
  'Salima',
  'Sgouhanna',
  'Fang',
  'Kavith',
  'Jason',
  'Salima',
  'Fang',
  'Joe'
];

const result1 = countOnly(firstNames, {'Jason': true, 'Karima': true, 'Fang': true});


describe('#countOnly', () => {

  it('given firstNames and a list of names to count, should return number of occurrences of each name.', () => {
    assert.equal(countOnly(firstNames, {'Jason': true, 'Karima': true, 'Fang': true}).Jason, 1);
  });

  it('given firstNames and a list of names to count, should return number of occurrences of each name.', () => {
    assert.equal(countOnly(firstNames, {'Jason': true, 'Karima': true, 'Fang': true}).Karima, undefined);
  });

  it('given firstNames and a list of names to count, should return number of occurrences of each name.', () => {
    assert.equal(countOnly(firstNames, {'Jason': true, 'Karima': true, 'Fang': true}).Fang, 2);
  });

})