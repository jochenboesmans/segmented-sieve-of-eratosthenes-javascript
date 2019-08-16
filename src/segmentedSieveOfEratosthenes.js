/*
Functions for generating prime numbers up to a given limit n using the segmented
sieve of Eratosthenes method.
*/
const {range} = require("lodash");

const primeBase = require("./regularSieveOfEratosthenes").primesUntil;
const {potentialPrimes} = require("./potentialPrimes");

/*
Returns a list of the given amount of primes.
*/
function primes(amount) {
  const segSize = segmentSize(amount);
  const base = primeBase(segSize);

  // generate and concat new segments to base until we have enough primes
  let result = base;
  for(
    let s = [segSize, 2 * segSize - 1];
    result.length < amount;
    s = [s[0] + segSize, s[1] + segSize]
   ) {
     result = result.concat(sweptSegment(s[0], s[1], base));
   }

  // return requested amount of primes
  return result.slice(0, amount);
}

/*
Returns a list of all prime numbers up to a given limit n.
*/
function primesUntil(n) {
  const segSize = segmentSize(n);
  const base = primeBase(segSize);

  // concat subsequent segments to base
  return segments(n, segSize).reduce((acc, s) =>
    acc.concat(sweptSegment(s[0], s[1], base)), base);
}

/*
Returns a preferred segment size based on a given limit n.
 */
function segmentSize(n) {
  return Math.max(Math.trunc(Math.sqrt(n)), 7);
}

/*
Returns segments as an array of [min, max], each representing a segment of [1, n].
 */
function segments(n, segSize) {
  return range(segSize, n, segSize).map(min => [min + 1, Math.min(min + segSize, n)]);
}

/*
Returns a list of all primes within the specified segment.
 */
function sweptSegment(min, max, base) {
  return potentialPrimes(min, max).filter(p => base.every(i => p % i !== 0));
}

module.exports = {primes, primesUntil};
