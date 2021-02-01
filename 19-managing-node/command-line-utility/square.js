#!/usr/bin/env node
const program = require('commander');

program
  .version('0.0.1')
  .option('-n, --number <value>', 'A number to square')
  .parse(process.argv);

const square = program.number * program.number;

console.log(`${program.number} squared is ${square}`);
