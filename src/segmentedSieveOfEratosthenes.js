/*
Functions for generating prime numbers up to a given limit n using the segmented
sieve of Eratosthenes method.
*/
const { range } = require("lodash");

const primeBase = require("./regularSieveOfEratosthenes").primesUntil;

function primes(amount) {
  const segSize = segmentSize(amount);
  const base = primeBase(segSize);

  let result = base;
  for(
    let s = [segSize, 2 * segSize];
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

const segmentSize = (n) => Math.trunc(Math.sqrt(n));

function segments(n, segSize) {
  const segMins = range(segSize, n, segSize);
  return segMins.map(min => [min + 1, Math.min(min + segSize, n)]);
}

function sweptSegment(min, max, base) {
  const potPrimes = potentialPrimes(min, max);
  return potPrimes.filter(p => base.every(i => p % i !== 0));
}

function potentialPrimes(min, max) {
  // return list of odd numbers between min and max
  const start = (min % 2 === 0) ? min + 1 : min;
  return range(start, max + 1, 2);
}

module.exports = {
  primes, primesUntil
}
