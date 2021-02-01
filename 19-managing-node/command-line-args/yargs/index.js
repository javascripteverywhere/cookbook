const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const {argv} = yargs(hideBin(process.argv));

console.log(argv);

if (argv.food === 'pizza') {
  console.log('mmm');
}