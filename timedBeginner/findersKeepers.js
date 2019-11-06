function findElement(arr, func) {
  console.log(arr);
  for (var i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return arr[i];
    }
  }
}

findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0);

// 6m 19s

// Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). If no element passes the test, return undefined.
