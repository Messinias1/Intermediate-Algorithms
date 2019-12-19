function sumAll(arr) {
  var newArr = [];
  if (arr[1] > arr[0]) {
    for (var i = arr[1]; i >= arr[0]; i--) {
      newArr.push(i);
    }
    console.log(newArr);
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    console.log(newArr.reduce(reducer));
    return newArr.reduce(reducer);
  } else {
    for (var i = arr[0]; i >= arr[1]; i--) {
      newArr.push(i);
    }
    console.log(newArr);
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    console.log(newArr.reduce(reducer));
    return newArr.reduce(reducer);
  }
}

sumAll([10, 5]);

//   We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
