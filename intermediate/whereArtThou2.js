function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  var keys = Object.keys(source);
  console.log(keys);

  var keyArray = collection.map(key => {
    for (var i in key) {
      // console.log("key: ", key);
      var value = key[i];
      console.log("value: ", value);
      for (i in keys) {
        console.log("i: ", source[keys[i]]);
      }
      arr.push(value);
    }
  });
  console.log(arr);
  // Only change code above this line
  return arr;
}

whatIsInAName(
  [
    { apple: "red", bat: "black" },
    { apple: "red" },
    { apple: "red", bat: "black", cookie: "sugar" },
    { bat: "black" }
  ],
  { apple: "red", bat: "black" }
);

// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.
