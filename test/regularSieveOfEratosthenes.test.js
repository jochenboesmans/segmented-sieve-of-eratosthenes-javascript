const { primesUntil } = require("../src/regularSieveOfEratosthenes");

test("correctly generates primes up to 10", () => {
  expect(primesUntil(10)).toStrictEqual([2, 3, 5, 7]);
});
