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
    middleInd = ((array.length - 1) / 2);
    middleVal.push(array[middleInd]);
  }

  return middleVal;
};

module.exports = middle;



