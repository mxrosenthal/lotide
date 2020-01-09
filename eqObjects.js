const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

const eqArrays = (arr1, arr2)=> {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function(obj1, obj2) {
  let obj1keys = Object.keys(obj1);
  let obj2keys = Object.keys(obj2);

  obj1keys = obj1keys.sort();
  obj2keys = obj2keys.sort();

  if (obj1keys.length !== obj2keys.length) {
    return false;
  } else if (eqArrays(obj1keys, obj2keys)) {
    for (const key of obj1keys) {

      if (Array.isArray(obj1[key]) && eqArrays(obj1[key], obj2[key])) {
        return true;
      }

      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
    return true;

  } else {
    return false;
  } 
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false