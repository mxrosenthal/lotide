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

module.exports = flatten;
