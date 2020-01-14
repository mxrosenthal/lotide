const eqObjects = function(obj1, obj2) {
    //gets object keys and puts them into array!
    let obj1keys = Object.keys(obj1);
    let obj2keys = Object.keys(obj2);

    obj1keys = obj1keys.sort();
    obj2keys = obj2keys.sort();

    //are the arrays of keys equal length? if no, return false
    if (obj1keys.length !== obj2keys.length) {
      return false;
    }

    //loop through each key of obj1
    for (const key of obj1keys) {

      //is the value of obj1 and object? if yes, recursively call eqObjects to check 
      //whether the nested obj's are unequal. if both are tru, return false
      if (typeof obj1[key] === 'object' && !eqObjects(obj1[key], obj2[key])) {
        
        //if the values at the same key in obj1 not equal to obj2 return false
        if (obj1[key] !== obj2[key]) {
          return false;
        } 

        return false;  
      }  
    }  

    //if all previous testing didn't return false, then the 
    //objects must be identical.
    return true;
};

module.exports = eqObjects;
