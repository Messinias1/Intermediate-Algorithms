function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
  var keys = Object.entries(source).flat();
  console.log(keys);

  collection.map(val => {
    var collEnts = Object.entries(val).flat();
    console.log(collEnts);
    // console.log(Object.entries(val).includes(keys));
    // The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
    var each = keys.every(value => {
      return collEnts.includes(value);
    });
    console.log(each);
    if (each) {
      arr.push(val);
    }
  });
  console.log(arr);
  // Only change code above this line
  return arr;
}

whatIsInAName(
  [{ apple: 1, bat: 2 }, { apple: 1 }, { apple: 2, bat: 1, cookie: 2 }],
  { apple: 1, cookie: 2 }
);

// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.
