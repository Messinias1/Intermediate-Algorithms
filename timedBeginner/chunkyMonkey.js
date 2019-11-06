function chunkArrayInGroups(arr, size) {
  var newArr = [];
  for (var i = 0; i < arr.length; i = i + size) {
    console.log(arr[i]);
    newArr.push([arr[i]]);
  }
  console.log(newArr);
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);

// chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].

// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
