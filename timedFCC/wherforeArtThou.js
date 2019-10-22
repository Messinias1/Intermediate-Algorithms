function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
  console.log(collection);
  var key = Object.keys(source);
  console.log(key);

  for (var i = 0; i < collection.length; i++) {
    console.log(Object.keys(collection[i]));
    console.log(Object.keys(collection[i]).every(item => item == key));

    // for (var j = 0; j < Object.keys(collection[i]).length; j++) {
    //   console.log(Object.keys(collection[j]));
    // }
  }
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

// should return [{ first: "Tybalt", last: "Capulet" }].
