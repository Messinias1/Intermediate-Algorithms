function sumFibs(num) {
  let total = 1;
  let result = 0;
  let initResult = 0;
  let currentResult = 1;

  for (let i = 1; i <= num; i++) {
    result = initResult + currentResult;
    initResult = currentResult;
    currentResult = result;

    if (result > num) {
      break;
    }

    if (result <= num && result % 2 !== 0) {
      console.log((total += result));
      // total += result;
    }
  }
  return total;

  // return (result += currentResult);
  //   F(n) = F(n-1) + F(n-2)
}

sumFibs(1000);
