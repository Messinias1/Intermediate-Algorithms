function sumFibs(num) {
  let startNum = 0;
  let currNum = 1;
  let result = 0;
  let total = 1;

  for (let i = 1; i <= num; i++) {
    result = currNum + startNum;
    startNum = currNum;
    currNum = result;

    if (result > num) {
      break;
    }
    if (result <= num && result % 2 !== 0) {
      console.log((total += result));
      console.log(total);
    }
  }
  console.log("RES", total);
  return total;
}

sumFibs(4000000);
// sumFibs(4) should return 5.
// sumFibs(4000000) should return 4613732.

//   Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
