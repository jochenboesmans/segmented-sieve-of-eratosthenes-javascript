const regularPrimesUntil = require("../src/regularSieveOfEratosthenes").primesUntil;
const segmentedPrimesUntil = require("../src/segmentedSieveOfEratosthenes").primesUntil;

test("Segmented sieve is faster than regular for high limits", () => {
  const n = 10**4;

  const times = {
    regular: time(regularPrimesUntil, n),
    segmented: time(segmentedPrimesUntil, n)
  };

  expect(times.regular > times.segmented).toBe(true);
});

test("Segmented sieve scales better than regular", () => {
  const n = [10**0, 10**1, 10**2, 10**3, 10**4, 10**5, 10**6, 10**7];

  const times = n.map(x => ({
    regular: (x > 10000) ? "N/A" : time(regularPrimesUntil, x),
    segmented: time(segmentedPrimesUntil, x)
  }));

  // test ratios of all valid subsequent values
  times.forEach((t, i) => {
    if (i - 1 >= 0 && t.regular !== "N/A" && times[i - 1].regular !== 0 && times[i - 1].segmented !== 0) {
      console.log(t.regular / times[i - 1].regular >= t.segmented / times[i - 1].segmented);
      expect(t.regular / times[i - 1].regular >= t.segmented / times[i - 1].segmented).toBe(true);
    }
  });
});

function time(functionToTime, arg) {
  const startTime = Date.now();
  functionToTime(arg);
  const endTime = Date.now();
  return endTime - startTime;
}
