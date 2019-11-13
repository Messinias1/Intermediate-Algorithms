function dropElements(arr, func) {
  var i = 0;
  while (i < arr.length) {
    if (func(arr[i])) {
      break;
    } else {
      arr.shift();
    }
  }
  console.log(arr);
  return arr;
}

dropElements([0, 1, 0, 1], function(n) {
  return n === 1;
});
// 40m 26s

// dropElements([0, 1, 0, 1], function(n) {return n === 1;}) should return [1, 0, 1].

// Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.
// Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
