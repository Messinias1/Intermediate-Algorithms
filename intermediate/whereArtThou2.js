function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  var keys = Object.entries(source);
  console.log(keys.flat());

  var fillKeys = collection.map(val => {
    console.log(Object.entries(val));
    console.log(Object.entries(val).includes(keys));

    var each = keys.flat().every(value => {
      return Object.entries(val)
        .flat()
        .includes(value);
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
  [{ apple: 1, bat: 2 }, { apple: 1 }, { apple: 1, bat: 2, cookie: 2 }],
  { apple: 1, cookie: 2 }
);

// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.