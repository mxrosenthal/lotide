const head = require('../head.js');
const assertEqual = require('../assertEqual.js');
const assert = require('chai').assert;




// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head([400]), 400);
// assertEqual(head([]), undefined);

describe('#head', () => {

  it("Given [5,6,7]), should return 5", () => {
    assert.strictEqual(head([5,6,7]), 5);
  });

  it("Given [5,6,7]), should return 5", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });

  it("Given [5,6,7]), should return 5", () => {
    assert.strictEqual(head([400]), 400);
  });

  it("Given [5,6,7]), should return 5", () => {
    assert.strictEqual(head([]), undefined);
  });




})