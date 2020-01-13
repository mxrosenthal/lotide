// const assertEqual = require('./assertEqual');

const tail = function(array) {
  let end = [];
  if (array.length <= 1) {

    return end;
  }
  // end = array.slice(1)
  for (let i = 1; i < array.length; i++) {
    end.push(array[i]);
  }
  return end;
};






module.exports = tail;