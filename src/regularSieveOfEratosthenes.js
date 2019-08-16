/*
Functions for generating prime numbers up to a given limit n using the sieve of
Eratosthenes method.
*/
const {range} = require("lodash");

const {potentialPrimes} = require("./potentialPrimes");

const FIRST_PRIME = 2;

/*
Returns a list of all prime numbers up to a given limit n.
*/
function primesUntil(n) {
  const potPrimes = [FIRST_PRIME].concat(potentialPrimes(FIRST_PRIME, n));
  return sweep(potPrimes, FIRST_PRIME, n);
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

/* Returns a list of composites of p (exclusive) up to n (inclusive). */
function composites(p, n) {
    return (p * p > n) ? [] : range(p * p, n + 1, p);
}

module.exports = {primesUntil};
