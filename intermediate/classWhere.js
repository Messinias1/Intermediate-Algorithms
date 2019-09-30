function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  var keys = Object.keys(source);
  arr = collection.filter(item => {
    for (var key = 0; key < keys.length; key++) {
      if (item[keys[key]] !== source[keys[key]]) return false;
    }
    return true;
  });
  // names = searchWords.filter(x => students.indexOf(x) !== -1);
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
