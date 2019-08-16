const {range} = require("lodash");

/*
Returns a list of odd numbers between min (inclusive) and max (inclusive)
as potential prime numbers.
*/
function potentialPrimes(min, max) {
  const start = (min % 2 === 0) ? min + 1 : min;
  return range(start, max + 1, 2);
}

module.exports = {potentialPrimes};
