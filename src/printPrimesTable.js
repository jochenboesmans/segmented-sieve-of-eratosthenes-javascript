const Table = require("cli-table");

const {primes} = require("./segmentedSieveOfEratosthenes.js");

/*
Prints a primes table of size (N+1)x(N+1) in the console, where N is passed as
an argument to the process.
*/
function printPrimesTable() {
  if (process.argv.length !== 3) {
    throw new Error(`Please supply exactly one CLI argument (the amount of
      primes to print). Example: "yarn run print_primes_table 100" would print
      a 101x101 primes table.`);
  } else {
    console.log(multiplicationTable(primes(process.argv[2])).toString());
  }
}

/*
Returns a multiplication table based on a given list of numbers.
*/
function multiplicationTable(p) {
  // create (N+1)x(N+1) array
  let values = (new Array(p.length + 1)).fill(0).map(a =>
    (new Array(p.length + 1)).fill(0));

  // fill first row and column with given list of number
  values[0][0] = " ";
  for (let i = 0; i < p.length; i++) {
    values[i+1][0] = p[i];
    values[0][i+1] = p[i];
  }

  // fill rest of positions with multiples according to their positions
  for (let i = 0; i < p.length; i++) {
    for (let j = 0; j < p.length; j++) {
      values[i+1][j+1] = p[i] * p[j];
    }
  }

  // create printable table object with values
  let table = new Table();
  for (let row of values) table.push(row);

  return table;
}

printPrimesTable();
