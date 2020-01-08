const letterPositions = function(sentence) {
  const results = {};
  let ind = 0;
  for (const letter of sentence) {
    if (letter !== ' ') {
      
      if (results[letter]) {
        results[letter].push(ind);
      } else {
        results[letter] = [];
        results[letter].push(ind);
      }
    }
    ind++;
  }
  return results;
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

const assertArraysEqual = (arr1, arr2)=> {
  console.log(arr1);
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

assertArraysEqual((letterPositions('hello'))['h'], [0]);
assertArraysEqual((letterPositions('hello'))['e'], [1]);
assertArraysEqual((letterPositions('hello'))['l'], [2, 3]);
assertArraysEqual((letterPositions('hello'))['o'], [4]);

