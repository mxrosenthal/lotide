const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

const eqObjects = function(obj1, obj2) {
    //gets object keys and puts them into array!
    let obj1keys = Object.keys(obj1);
    let obj2keys = Object.keys(obj2);

    obj1keys = obj1keys.sort();
    obj2keys = obj2keys.sort();

    //are the arrays of keys equal length? if no, return false
    if (obj1keys.length !== obj2keys.length) {
      return false;
    }

    //loop through each key of obj1
    for (const key of obj1keys) {

      //is the value of obj1 and object? if yes, recursively call eqObjects to check 
      //whether the nested obj's are unequal. if both are tru, return false
      if (typeof obj1[key] === 'object' && !eqObjects(obj1[key], obj2[key])) {
        
        //if the values at the same key in obj1 not equal to obj2 return false
        if (obj1[key] !== obj2[key]) {
          return false;
        } 

        return false;  
      }  
    }  

    //if all previous testing didn't return false, then the 
    //objects must be identical.
    return true;
};


// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba), true); // => true

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false); // => false

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// // assertEqual(eqObjects(cd, dc), true); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false); // => false

// assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true) ;// => true

// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false); // => false
// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false); // => false

console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })) // => true

console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })) // => false
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })) // => false
console.log(eqObjects({ben: {ben: {ben: 'david'}}}, {ben: {ben: {ben: 'david'}}}))