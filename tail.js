const assertEqual = function(actual, expected) {
  if (actual === expected) {
    // console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
    // console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

const tail = function(array) {
  let end = [];
  if (array.length <= 1) {

    return end;
  }
  // end = array.slice(1)
  for (let i = 1; i < array.length; i++) {
    end.push(array[i]);
  }
  return end;
};

console.log(tail(['he','him','them']))
// // console.log(tail(['big','small','huge',8]));
// console.log(tail(['bub']));
// // Test Case: Check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words);// no need to capture the return value since we are not checking it
// assertEqual(words.length, 3);// original array should still have 3 elements!
// assertEqual(tail([15]),[]);

// console.log(assertEqual([], []));