# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @mxrosenthal/lotide`

**Require it:**

`const _ = require('@mxrosenthal/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: Takes in an array of anylength and returns the value in the 0th indicie.

* `tail(...)`: Takes in an array and returns the same array without the 0th indicie.

* `middle(...)`: Middle returns an array containing the value at the center of the given array. Should the given 
array be of even length, the returned array contains the two values which sit next to the center.

* `without(...)`: Without takes in two arguments, an array and what to leave out and returns the array ommiting what should be excluded.

* `takeUntil(...)`: Function gets passed an array and a callback function. takeUntil loops through the array from the start and pushes every value onto the returned array. If a value in the passed array triggers false in the callback then the loop exits and returns the array including all values up to but not included the stopping value.

* `map(...)`: Function gets passed an array and a callback function. takeUntil loops through the array from the start and transforms each value according to the callback function and returns an array of transformed values.

* `letterPositions(...)`: As the function loops through the passed string, it updates an object which gets a key for each unique letter in the string. Each key is assigned an array which get pushed the indicie of every occurence of that letter.

* `flatten(...)`: Iterates through a series of nested arrays and returns a 1D array with every value.

* `findKeyByValue(...)`: Gets passed an object and a value and returns the first key associated with that value.

* `findKey(...)`: An object and a callback function are passed in. The function loops through the object keys and returns the first key which satisfies the callback function.

* `eqObjects(...)`: 2 objects are passed in and the function asserts whether all key:value pairs match and returns true if that is the case, false otherwise.

* `eqArrays(...)`: 2 arrays are passed in and the function asserts whether all indicies match and returns true if that is the case, false otherwise.

* `countOnly(...)`: Pass in an array of strings and an object which specifies which strings to count. Example inputs: countOnly(firstNames, {'Jason': true, 'Karima': true, 'Fang': true}); The function returns an object with each true name as a key with a value equal to the number of time that name occured in a list of 'firstNames' in this case.

* `countLetters(...)`: Works similar to countOnly(), only this function gets passed a string. An object is returned where each key is a unique letter in the string and the associated value represents the number of occurrences of that letter in the string. 
