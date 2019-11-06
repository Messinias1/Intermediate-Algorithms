function getIndexToIns(arr, num) {
  var concatted = arr.concat(num);
  concatted = concatted.sort(function(a, b) {
    return a - b;
  });
  console.log(concatted);
  for (var i = 0; i < concatted.length; i++) {
    console.log(concatted[i]);
    if (concatted[i] === num) {
      console.log(concatted.indexOf(concatted[i]));
      return concatted.indexOf(concatted[i]);
    }
  }
}

getIndexToIns([2, 20, 10], 19);

// 10m

// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
