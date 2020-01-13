
const eqArrays = (arr1, arr2)=> {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    
    if (Array.isArray(arr1[i]) && !eqArrays(arr1[i], arr2[i])) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    } 
    if (arr1[i] !== arr2[i] && !Array.isArray(arr1[i])) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;

