if (process.argv.length !== 3) {
  throw new Error(`Please supply exactly one CLI argument (the amount of primes to print). Example: "yarn run print_primes 100" would print the first 100 primes.`);
} else {
  const amount = process.argv[2];
  console.log(amount);
}
