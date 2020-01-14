const findKeyByValue = function(obj, val) {
  for (const item in obj) {
    if (obj[item] === val) {
      return item;
    }
  }
  return;
};

module.exports = findKeyByValue;

