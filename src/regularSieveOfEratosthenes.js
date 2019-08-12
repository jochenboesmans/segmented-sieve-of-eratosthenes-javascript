/*
Functions for generating prime numbers up to a given limit n using the sieve of
Eratosthenes method.
*/
import _ from "lodash";

const FIRST_PRIME = 2;

/*
Returns a list of all prime numbers up to a given limit n.
*/
export default function primesUntil(n) {
  // use "slice" to avoid mutating array
  const potPrimes = [FIRST_PRIME].concat(potentialPrimes(FIRST_PRIME, n));
  return sweep(potPrimes, FIRST_PRIME, n, 0);
}

function potentialPrimes(min, max) {
  // return list of odd numbers between min and max
  const start = (min % 2 === 0) ? min + 1 : min;
  return _.range(start, max, 2);
}

function sweep(potPrimes, p, n) {
  const sweptPrimes = potPrimes.filter(x =>
    !(composites(p, n).includes(x)));
  const newP = sweptPrimes.find(e => e > p);
  return (newP === undefined) ? sweptPrimes : sweep(sweptPrimes, newP, n);
}

const composites = (p, n) => (p * p > n) ? [] : _.range(p * p, n, p);
