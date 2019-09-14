function sumFibs(num) {
  var result = 0;

  for (var i = 0; i <= num; i++) {
    var currentResult = 0;
    if (i < 2) {
      currentResult = 1;
    } else {
      if (i >= 2) {
        currentResult = i - 1 + (i - 2);
        console.log(currentResult);
      }
    }
  }
  console.log("FINAL ANSWER", (result += currentResult));
  return (result += currentResult);
  //   F(n) = F(n-1) + F(n-2)
}

sumFibs(75024);
