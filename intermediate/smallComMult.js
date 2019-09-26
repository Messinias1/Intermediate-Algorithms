function smallestCommons(arr) {
  var rangeArr = [];
  for (var i = arr[0]; i <= arr[1]; i++) {
    rangeArr.push(i);
  }
  console.log(rangeArr);

  var sieve = [],
    i,
    j,
    primes = [];
  for (i = 2; i <= arr[1]; ++i) {
    if (!sieve[i]) {
      // i has not been marked -- it is prime
      primes.push(i);
      for (j = i << 1; j <= arr[1]; j += i) {
        sieve[j] = true;
      }
    }
  }
  console.log(primes);
  for (var i = 0; i < primes.length; i++) {
    for(var j = 0; j < rangeArr.length; j++){
        if ()
    }
  }
}

smallestCommons([2, 10]);

// LCM = (8, 12, 15) = 2^3 * 3^1 * 5^1 = 120
