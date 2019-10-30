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
  console.log(primes);
  var primeReducer = (num, total) => num + total;
  console.log(primes.reduce(primeReducer));
  return primes.reduce(primeReducer);
}

sumPrimes(977);

// 6m 27s

// sumPrimes(10) should return 17.
// sumPrimes(977) should return 73156.

//   Sum all the prime numbers up to and including the provided number.
// A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.
// The provided number may not be a prime.
