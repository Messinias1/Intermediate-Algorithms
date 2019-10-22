function destroyer(arr) {
  console.log(arr);
  var arr2 = [];

  for (var i = 1; i < [...arguments].length; i++) {
    arr2.push([...arguments][i]);
  }
  console.log(arr2);

  let finalArr = arr.filter(x => !arr2.includes(x));
  console.log(finalArr);
  return finalArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// 33m 42s

// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

// destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].
