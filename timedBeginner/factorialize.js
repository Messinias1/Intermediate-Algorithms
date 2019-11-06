function factorialize(num) {
  if (num === 0) {
    return 1;
  } else {
    var arr = [];
    for (var i = 1; i <= num; i++) {
      console.log(i);
      arr.push(i);
    }
    console.log(arr);
    const reducer = (accumulator, currentValue) => accumulator * currentValue;
    console.log(arr.reduce(reducer));
    return arr.reduce(reducer);
  }
}

factorialize(5);

// 4m 53s

// Return the factorial of the provided integer.
// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
// Factorials are often represented with the shorthand notation n!
// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
// Only integers greater than or equal to zero will be supplied to the function.
