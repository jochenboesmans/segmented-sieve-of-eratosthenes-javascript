const regularPrimesUntil = require("../src/regularSieveOfEratosthenes").primesUntil;
const segmentedPrimesUntil = require("../src/segmentedSieveOfEratosthenes").primesUntil;

test("Segmented sieve is faster than regular for high limits", () => {
  const n = 10000;

  const regularStart = Date.now();
  regularPrimesUntil(n);
  const regularFinish = Date.now();
  const regularTime = regularFinish - regularStart;

  const segmentedStart = Date.now();
  segmentedPrimesUntil(n);
  const segmentedFinish = Date.now();
  const segmentedTime = segmentedFinish - segmentedStart;

  expect(segmentedTime < regularTime).toBe(true);
});

test("Segmented sieve scales better than regular", () => {
  const n1 = 3000;
  const n2 = 30000;

  const regularN1Start = Date.now();
  regularPrimesUntil(n1);
  const regularN1Finish = Date.now();
  const regularN1Time = regularN1Finish - regularN1Start;

  const regularN2Start = Date.now();
  regularPrimesUntil(n2);
  const regularN2Finish = Date.now();
  const regularN2Time = regularN2Finish - regularN2Start;

  const segmentedN1Start = Date.now();
  segmentedPrimesUntil(n1);
  const segmentedN1Finish = Date.now();
  const segmentedN1Time = segmentedN1Finish - segmentedN1Start;

  const segmentedN2Start = Date.now();
  segmentedPrimesUntil(n2);
  const segmentedN2Finish = Date.now();
  const segmentedN2Time = segmentedN2Finish - segmentedN2Start;

  const expected = regularN2Time / regularN1Time > segmentedN2Time / segmentedN1Time;
  expect(expected).toBe(true);
});
