const takeUntil = function(array, callback) {
  
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      break;
    } else {
      result.push(array[i]);
    }
  }
  return result;
};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');

const data3 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results3 = takeUntil(data3, x => x === 'pimp');

const data4 = [1, 2, 3, 4, 5, 6, 7, 8];
const results4 = takeUntil(data4, x => x > 6);

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

// assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
// assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
// assertArraysEqual(results3, ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"]);
// assertArraysEqual(results4, [1, 2, 3, 4, 5, 6]);

