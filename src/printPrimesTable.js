import _ from "lodash";
import Table from "cli-table";

import primes from "./segmentedSieveOfEratosthenes.js";

function main() {
  if (process.argv.length !== 3) {
    throw new Error(`Please supply exactly one CLI argument (the amount of primes to print). Example: "yarn run print_primes 100" would print the first 100 primes.`);
  } else {
    printPrimesTable(primes(process.argv[2]));
  }
}

function printPrimesTable(p) {
  console.log(primesMultiplicationTable(p).toString());
}

function primesMultiplicationTable(p) {
  let values = (new Array(p.length + 1).fill(0)).map(e => new Array(p.length + 1).fill(0));
  values[0][0] = " ";
  for (let i = 0; i < p.length; i++) {
    values[i+1][0] = p[i];
    values[0][i+1] = p[i];
  }
  for (let i = 0; i < p.length; i++) {
    for (let j = 0; j < p.length; j++) {
      values[i+1][j+1] = p[i] * p[j];
    }
  }

  let table = new Table();
  for (let row of values) {
    table.push(row);
  }
  return table;
}

const multipleValue = (i, j, p) => p[i] * p[j];

main();
