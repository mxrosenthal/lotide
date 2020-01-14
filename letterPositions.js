const letterPositions = function(sentence) {
  const results = {};
  let ind = 0;
  for (const letter of sentence) {
    if (letter !== ' ') {
      
      if (results[letter]) {
        results[letter].push(ind);
      } else {
        results[letter] = [];
        results[letter].push(ind);
      }
    }
    ind++;
  }
  return results;
};

module.exports = letterPositions;

