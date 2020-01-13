const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');

module.exports = {
  head: head,
  tail: tail,
  middle: middle,
  without: this.without,
  takeUntil: takeUntil,
  map: map,
  letterPosition: letterPosition,
  flatten: flatten,
  findKeyByValue: findKeyByValue,
  findKey: findKey,
  eqObjects: eqObjects,
  eqArrays: eqArrays,
  countOnly: countOnly,
  countLetters: countLetters,
  assertObjectsEqual: assertObjectsEqual,
  assertEqual: assertEqual,
  assertArraysEqual: assertArraysEqual
}