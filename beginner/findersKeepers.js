function findElement(arr, func) {
  let num = [];

  for (var i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      console.log(arr[i]);
      num.push(arr[i]);
    }
  }
  console.log(num[0]);

  return num[0];
}

findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0);

// Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). If no element passes the test, return undefined.
