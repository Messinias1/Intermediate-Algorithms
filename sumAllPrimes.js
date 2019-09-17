function sumPrimes(num) {
  var sieve = [],
    i,
    j,
    primes = [];
  for (i = 2; i <= num; ++i) {
    if (!sieve[i]) {
      // i has not been marked -- it is prime
      primes.push(i);
      for (j = i << 1; j <= num; j += i) {
        sieve[j] = true;
      }
    }
  }

  function getSum(total, num) {
    return total + num;
  }
  console.log(primes.reduce(getSum));

  return primes.reduce(getSum);
}

sumPrimes(977);
