/*
Functions for generating prime numbers up to a given limit n using the sieve of
Eratosthenes method.
*/
const { range } = require("lodash");

const FIRST_PRIME = 2;

/*
Returns a list of all prime numbers up to a given limit n.
*/
function primesUntil(n) {
  const potPrimes = [FIRST_PRIME].concat(potentialPrimes(FIRST_PRIME, n));
  return sweep(potPrimes, FIRST_PRIME, n, 0);
}

/*
Returns a list of odd numbers between min (inclusive) and max (inclusive)
as potential prime numbers.
*/
function potentialPrimes(min, max) {
  const start = (min % 2 === 0) ? min + 1 : min;
  return range(start, max + 1, 2);
}

/*
Returns a list of primes filtered from a list of potential primes by removing
all composites of previous numbers in the list.
*/
function sweep(potPrimes, p, n) {
  const sweptPrimes = potPrimes.filter(x =>
    !(composites(p, n).includes(x)));
  const newP = sweptPrimes.find(e => e > p);
  // recursion until p is biggest remaining prime
  return (newP === undefined) ? sweptPrimes : sweep(sweptPrimes, newP, n);
}

/* Returns a list of composites of p (exclusive) lower up to n (inclusive). */
const composites = (p, n) => (p * p > n) ? [] : range(p * p, n + 1, p);

module.exports = {
  primesUntil
}
