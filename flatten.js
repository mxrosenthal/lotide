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

const flatten = (array)=> {
  let result = [];
  for (let i = 0; i < array.length; i++){
    if (!Array.isArray(array[i])) {
      result.push(array[i]);
    } else if (Array.isArray(array[i]))  {
      let temp = array[i];
      for (let j = 0; j < temp.length; j++) {
        result.push(temp[j]);
      }
    }
  }
  return result;
}

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]),  [1, 2, 3, 4, 5, 6]);