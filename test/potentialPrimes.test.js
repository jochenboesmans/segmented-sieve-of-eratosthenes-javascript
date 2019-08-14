const {potentialPrimes} = require("../src/potentialPrimes");

describe("potentialPrimes/2", () => {
  describe("includes all expected values", () => {
    const expectedOutput = [3, 5, 7, 9];
    test("for even min, even max", () => {
      const min = 2, max = 10;
      expect(potentialPrimes(min, max)).toEqual(expectedOutput);
    });
    test("for odd min, even max", () => {
      const min = 3, max = 10;
      expect(potentialPrimes(min, max)).toEqual(expectedOutput);
    });
    test("for even min, odd max", () => {
      const min = 2, max = 9;
      expect(potentialPrimes(min, max)).toEqual(expectedOutput);
    });
    test("for odd min, odd max", () => {
      const min = 3, max = 9;
      expect(potentialPrimes(min, max)).toEqual(expectedOutput);
    });
  });
});
