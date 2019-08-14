/*
Functions for generating prime numbers up to a given limit n using the segmented
sieve of Eratosthenes method.
*/
const {range} = require("lodash");

const primeBase = require("./regularSieveOfEratosthenes").primesUntil;
const {potentialPrimes} = require("./potentialPrimes");

function primes(amount) {
  const segSize = amount;
  const base = primeBase(segSize + 1);

  let result = base;
  for(
    let s = [segSize, 2 * segSize - 1];
    result.length < amount;
    s = [s[0] + segSize, s[1] + segSize]
   ) {
     result = result.concat(sweptSegment(s[0], s[1], base));
   }
   return result.slice(0, amount);
}

function primesUntil(n) {
  const segSize = segmentSize(n);
  const base = primeBase(segSize);
  const segs = segments(n, segSize);

  return segments(n, segSize).reduce((acc, s) =>
    acc.concat(sweptSegment(s[0], s[1], base)), base);
}

const segmentSize = (n) => Math.max(Math.trunc(Math.sqrt(n)), 2);

function segments(n, segSize) {
  const segMins = range(segSize, n, segSize);
  return segMins.map(min => [min + 1, Math.min(min + segSize, n)]);
}

function sweptSegment(min, max, base) {
  const potPrimes = potentialPrimes(min, max);
  return potPrimes.filter(p => {
    return base.every(i => p % i !== 0);
  });
}

module.exports = {primes, primesUntil}
