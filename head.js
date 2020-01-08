const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};


// assertEqual('lighthouse labs', 'bootcamp');
// assertEqual(1, 1);


const head = function(array) {
  // console.log(array.length);
  if (array.length === 0) {
    return;
  }
  return array[0];
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([400]), 400);
assertEqual(head([]), undefined);