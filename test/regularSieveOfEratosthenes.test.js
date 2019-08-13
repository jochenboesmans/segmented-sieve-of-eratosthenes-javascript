const { primesUntil } = require("../src/regularSieveOfEratosthenes");

test("correctly generates primes up to 10", () => {
  const expected_output = [2, 3, 5, 7];
  expect(primesUntil(10)).toStrictEqual(expected_output);
});

test("correctly generates primes up to 100", () => {
  const expected_output = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
  expect(primesUntil(100)).toStrictEqual(expected_output);
});

test("includes limit if it is a prime itself", () => {
  const test_prime = 7;
  expect(primesUntil(test_prime).includes(test_prime)).toBe(true);
});
