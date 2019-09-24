function uniteUnique(arr) {
  var args = [...arguments];
  console.log(args);

  //   var bigArr = args.toString().split(",");

  //   The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
  var bigArr = args.flat();
  console.log(bigArr);

  // Set is a new data object introduced in ES6. Because Set only lets you store unique values. When you pass in an array, it will remove any duplicate values.
  console.log(Array.from(new Set(bigArr)));
  return Array.from(new Set(bigArr));
}

uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);
// should return [1, 3, 2, 5, 4]

// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
// Check the assertion tests for examples.
