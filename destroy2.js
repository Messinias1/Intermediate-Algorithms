function destroyer(arr) {
  // Remove all the values

  var args = Array.prototype.slice.call(arguments);
  console.log("outside destroyer array: ", args[1], args[2]);
  console.log(args.splice([1, -1]));
  console.log("arr: ", arr);
  console.log("all arguments: ", args);

  // var newArr = [];
  // for (var i = 0; i < args.length; i++) {
  //   for (var j = 0; j < arr.length; j++) {
  //     if (arr[j].indexOf(args[i], 1) === -1) {
  //       newArr.push(arr[j])
  //   }
  // }
  // console.log(newArr)
  // }

  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
