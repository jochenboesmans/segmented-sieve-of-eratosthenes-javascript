# SegmentedSieveOfEratosthenesJS

Library for efficiently generating big lists of prime numbers.

## How to use package

1. Install package: `yarn add segmented-sieve-of-eratosthenes-js`
2. Import needed function: `const {primesUntil} = require("segmented-sieve-of-eratosthenes-js")`
3. Use function: `primesUntil(10)`
4. Expected output: [3, 5, 7, 9]

This will run the segmented algorithm to generate a list of prime numbers until (including) n.

## Available scripts
* `print_primes_table $N`: Prints a primes table of size (N+1)\*(N+1) in the console.
* `test`: Runs complete test suite.

## Performance tests

These tests were run on a stock i5 6600k (~3.9Ghz Turbo).
All primes are generated up until (including) n.
Times are in ms.

| n | 10^0 | 10^1 | 10^2 | 10^3 | 10^4 | 10^5 | 10^6 | 10^7 | 10^8 |
| - | -: | -: | -: | -: | -: | -: | -: | -: | -: |
| regular SoE | 0 | 0 | 0 | 3 | 227 | N/A | N/A | N/A | N/A |
| segmented SoE | 0 | 0 | 0 | 0 | 0 | 6 | 187 | 4,840 | 142,253 |
