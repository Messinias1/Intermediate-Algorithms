// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.

function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line

  var keys = Object.keys(source);
  console.log(keys);
  console.log(source);
  console.log(source.hasOwnProperty(keys));

  console.log(collection);
  console.log(collection[0].hasOwnProperty(keys));

  for (var i in collection) {
    for (var j in keys) {
      console.log(collection[keys[j]]);
      console.log(keys[j]);
      // if (
      //   // collection[keys[j]].hasOwnProperty(keys[j]) &&
      //   // collection[keys[j]] === source[keys[j]]
      // ) {
      //   arr.push(collection[i]);
      // }
    }
  }
  console.log("New Array", arr);

  // Only change code above this line
  return arr;
}

whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }
  ],
  { last: "Capulet" }
);
