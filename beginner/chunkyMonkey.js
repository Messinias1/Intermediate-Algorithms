function chunkArrayInGroups(arr, size) {
  var newArr = [];

  for (var i = 0; i < arr.length; i = i + size) {
    newArr.push(arr.slice(i, i + size));
  }
  console.log(newArr);
  return newArr;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);

// Write a function that splits an array (first argument) into groups the length of size(second argument) and returns them as a two-dimensional array.
