const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

const countLetters = function(sentence) {

  let resultingLetterCount = {};

  for (const letter of sentence) {
    if (letter !== ' ') {
      if (resultingLetterCount[letter]) {
        resultingLetterCount[letter] += 1;
      } else {
        resultingLetterCount[letter] = 1;
      }
    }
  }
  return resultingLetterCount;
};

console.log(countLetters('Believe in yourself!'));
console.log(countLetters('99999999999999'));