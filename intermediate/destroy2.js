function destroyer(arr) {
  // Remove all the values
  var args = [...arguments];
  // var args = Array.prototype.slice.call(arguments);
  console.log("comparers: ", args.slice(1, 10));
  console.log("arr: ", arr);
  console.log("args: ", args);

  var toBeCompared = args.slice(1, 10);

  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    // console.log(arr.length);
    console.log(arr[i]);
    if (toBeCompared.indexOf(arr[i]) === -1) {
      newArr.push(arr[i]);
    }
  }
  console.log(newArr);
  return newArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
