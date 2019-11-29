function multiplesOf3and5(number) {
  var arr = [];
  for (var i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      arr.push(i);
    }
  }
  console.log(arr);
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  console.log(arr.reduce(reducer));
  return arr.reduce(reducer);
}

multiplesOf3and5(1000);
