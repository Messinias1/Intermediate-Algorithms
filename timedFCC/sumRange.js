function sumAll(arr) {
  var newArr = [];

  for (var i = arr[0]; i <= arr[1]; i++) {
    console.log("i", i);
    newArr.push(i);
  }
  console.log(newArr);
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  console.log(newArr.reduce(reducer));
}

// 8m 35s

sumAll([1, 4]);
