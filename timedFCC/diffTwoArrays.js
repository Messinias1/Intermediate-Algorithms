function diffArray(arr1, arr2) {
  var arr = arr1.concat(arr2);

  console.log(arr);

  var filtered = arr.filter(item => {
    console.log(arr.indexOf(item) === arr.lastIndexOf(item));
    return arr.indexOf(item) === arr.lastIndexOf(item);
  });
  console.log(filtered);
  return filtered;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
