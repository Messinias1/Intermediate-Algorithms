function sumAll(arr) {
    var max = Math.max(...arr);
    var min = Math.min(...arr);
  
    var total = 0;
    for (var i = min; i <= max; i++) {
      total += i;
    }
    console.log(total)
    return total;
  }
  
  sumAll([1, 4, 7, 8]);