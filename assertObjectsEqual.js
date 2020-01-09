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

const assertObjectsEqual = function(actual, expected) {
  if(eqObjects(actual, expected)) {
    console.log('✅✅✅ They are equal')
  } else {
    console.log('❌❌❌ They are NOT equal')
  }
};


let people = {'name': 'debbie'};
let person = {'name': 'debbie'};
assertObjectsEqual(people, person);