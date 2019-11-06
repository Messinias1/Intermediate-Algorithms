function frankenSplice(arr1, arr2, n) {
  var sliced = arr1.slice();
  console.log(sliced);
  arr2.splice(n, 0, sliced);
  console.log(arr2.flat());
  return arr2.flat();
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
// frankenSplice([1, 2, 3], [4, 5], 1) should return [4, 1, 2, 3, 5].

// 17m 23s

// You are given two arrays and an index.
// Use the array methods slice and splice to copy each element of the first array into the second array, in order.
// Begin inserting elements at index n of the second array.
// Return the resulting array. The input arrays should remain the same after the function runs.
