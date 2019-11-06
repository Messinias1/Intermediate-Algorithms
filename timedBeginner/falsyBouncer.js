function bouncer(arr) {
  console.log(arr);
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i]) {
      newArr.push(arr[i]);
    }
  }
  console.log(newArr);
  return newArr;
}

bouncer([1, null, NaN, 2, undefined]);

// 22m 17s

// Remove all falsy values from an array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
// Hint: Try converting each value to a Boolean.
