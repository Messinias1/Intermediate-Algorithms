function sumAll(arr) {
  // get the smallest and biggest numbers in the array
    var max = Math.max(...arr);
    var min = Math.min(...arr);

  // look for numbers between the smallest and largest number inclusively
    var total = 0;
    for (var i = min; i <= max; i++) {
      // sum all of the numbers
      total += i;
    }
    console.log(total)
    return total;
  }
  
  sumAll([1, 3]);