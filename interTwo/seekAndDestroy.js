function destroyer(arr) {
  console.log(arr);
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i] !== [...arguments][1] && arr[i] !== [...arguments][2]) {
      newArr.push(arr[i]);
    }
  }
  console.log("nArr", newArr);
  return newArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
//   You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

//   Note
//   You have to use the arguments object.
