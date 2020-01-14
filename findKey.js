const findKey = function(obj, callback) {
  let foundKey = '';

  for (const key in obj) {
    let value = obj[key];
    foundKey = callback(value);

    if (foundKey) {
      return key;
    } 
  }
  return 'No key with matching value';
};

module.exports = findKey;

