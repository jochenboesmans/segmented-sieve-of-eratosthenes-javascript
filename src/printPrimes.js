import _ from "lodash";

import primes from "./segmentedSieveOfEratosthenes.js";

function main() {
  if (process.argv.length !== 3) {
    throw new Error(`Please supply exactly one CLI argument (the amount of primes to print). Example: "yarn run print_primes 100" would print the first 100 primes.`);
  } else {
    printPrimes(primes(process.argv[2]));
  }
}

function printPrimes(p) {
  const table = primesMultiplicationTable(p);
  for (let row of table) {
    console.log(row.join(" | "));
  }
}

function primesMultiplicationTable(p) {
  let table = (new Array(p.length + 1).fill(0)).map(e => new Array(p.length + 1).fill(0));
  table[0][0] = 1;
  for (let i = 0; i < p.length; i++) {
    table[i+1][0] = p[i];
    table[0][i+1] = p[i];
  }
  for (let i = 0; i < p.length; i++) {
    for (let j = 0; j < p.length; j++) {
      table[i+1][j+1] = p[i] * p[j];
    }
  }
  return table;
}

const multipleValue = (i, j, p) => p[i] * p[j];

main();
