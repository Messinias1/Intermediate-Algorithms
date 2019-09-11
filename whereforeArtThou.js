function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  const keys = Object.keys(source);

  arr = collection.filter(element => {
    return keys.every(key => {
      return element[key] && element[key] === source[key];
    });
  });
  console.log(arr);
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
