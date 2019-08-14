const rewire = require("rewire");

const {primesUntil} = require("../src/regularSieveOfEratosthenes");
// rewire module is used for testing non-exported functions.
const rewiredRegularSoE = rewire("../src/regularSieveOfEratosthenes");

describe("composites/2", () => {
  const composites = rewiredRegularSoE.__get__("composites");
  test("includes all expected values", () => {
    const p = 2, n = 10;
    const expectedOutput = [4, 6, 8, 10];
    expect(composites(p, n)).toEqual(expectedOutput);
  });
});

describe("sweep/3", () => {
  const sweep = rewiredRegularSoE.__get__("sweep");
  test("correctly filters a list of potentialPrimes with realistic values", () => {
    const p = 2, n = 10;
    const expectedOutput = [2, 3, 5, 7];
    // odd numbers from 2 (incl.) to 10 (incl.), prepended by 2.
    const potPrimes = [2, 3, 5, 7, 9];
    expect(sweep(potPrimes, p, n)).toEqual(expectedOutput);
  });
});

describe("primesUntil/1", () => {
  describe("correctly generates primes", () => {
    test("up to 10", () => {
      const expectedOutput = [2, 3, 5, 7];
      expect(primesUntil(10)).toStrictEqual(expectedOutput);
    });
    test("up to 100", () => {
      const expectedOutput = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
      expect(primesUntil(100)).toStrictEqual(expectedOutput);
    });
  });
  test("includes limit if it is a prime itself", () => {
    const testPrime = 7;
    expect(primesUntil(testPrime).includes(testPrime)).toBe(true);
  })
});
