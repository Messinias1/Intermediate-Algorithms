function whatIsInAName(collection, source) {
  var arr = [];
  var keys = Object.entries(source).flat();

  collection.map(val => {
    var collEnts = Object.entries(val).flat();
    var each = keys.every(value => {
      return collEnts.includes(value);
    });
    if (each) {
      arr.push(val);
    }
  });
  console.log(arr);
  return arr;
}

whatIsInAName(
  [{ apple: 1, bat: 2 }, { apple: 1 }, { apple: 1, bat: 2, cookie: 2 }],
  { apple: 1, cookie: 2 }
);
