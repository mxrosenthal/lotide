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

const assertArraysEqual = (arr1, arr2)=> {
  console.log(arr1);
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

// console.log(assertArraysEqual(['1', '2', '3'], ['1', '2', '3']));
// console.log(assertArraysEqual(['1', '2', '3'], ['1', '2', 3]));

// console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));
// console.log(assertArraysEqual([1, 2, 3], [1, 2, 4]));

const middle = (array)=> {
  let middleVal = [];
  let middleInd;
  if (array.length >= 0 && array.length <= 2) {
    return middleVal;
  } else if (array.length % 2 === 0) {
    middleInd = (((array.length) / 2) - 1);
    middleVal.push(array[middleInd]);
    middleVal.push(array[middleInd + 1]);
  } else if (array.length % 2 !== 0) {
    middleInd = ((array.length - 1 ) / 2)
    middleVal.push(array[middleInd]);
  }
  return middleVal;
}
// console.log(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// console.log(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// console.log(middle([1, 2, 3]));
// console.log(middle([1, 2]));
// console.log(middle([1]));

console.log(assertArraysEqual(middle([1, 2, 3]), [2]));
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [5,6]));
