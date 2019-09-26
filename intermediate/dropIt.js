function dropElements(arr, func) {
  console.log(arr);

  for (var i = 0; i < arr.length; i++) {
    console.log(func(arr[i]));
    if (func(arr[0])) {
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

// get first index = true
// return rest of array after true
