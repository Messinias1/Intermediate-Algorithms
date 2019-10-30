function sumFibs(num) {
  var startNum = 1;
  var prevNum = startNum;
  var currNum = startNum + prevNum;
  var nextNum = currNum + prevNum;
  console.log(nextNum);
}

sumFibs(4);
// sumFibs(4) should return 5.
// sumFibs(4000000) should return 4613732.

//   Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
