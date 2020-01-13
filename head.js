const assertEqual = require('./assertEqual');

const head = function(array) {
  // console.log(array.length);
  if (array.length === 0) {
    return;
  }
  return array[0];
};

module.exports = head;