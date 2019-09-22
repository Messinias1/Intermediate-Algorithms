function frankenSplice(arr1, arr2, n) {
  var copy = arr2.slice();
  var lastIndex = copy.slice(n);
  console.log(lastIndex);

  for (var i = 0; i < arr1.length; i++) {
    console.log(copy.splice(n, 1, arr1[i]));
    n++;
  }
  console.log(copy.concat(lastIndex));
}

frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2);

//   You are given two arrays and an index.
// Use the array methods slice and splice to copy each element of the first array into the second array, in order.
// Begin inserting elements at index n of the second array.
// Return the resulting array. The input arrays should remain the same after the function runs.
