// Simple generator with hard-coded values.
function* generateValues() {
  yield 895498;
  yield 'This is the second value';
  yield 5;
  return 'This is the end';
}

const generator = generateValues();

console.group('FIRST TEST');

// Start the generator (it runs from the beginning to the first yield)
console.log(generator.next().value);  // 895498

// Resume the generator (until the next yield)
console.log(generator.next().value);  // 'This is the second value'

// Get the final two values
console.log(generator.next().value);  // 5
console.log(generator.next().value);  // 'This is the end'

console.groupEnd();


console.group('SECOND TEST');
// You can also use a loop to get all the values from the generator (but not the
// return value)
for (const value of generateValues()) {
  console.log(value);
}
console.groupEnd();

console.group('THIRD TEST');
// And with spread syntax, you can dump everything into an array in one step
const values = [...generateValues()];
console.log(values);
console.groupEnd();


console.group('Random number test');

// An advanced generator that creates repeatable random numbers
function* mulberry32(seed) {
  let t = seed += 0x6D2B79F5;

  // Generate numbers indefinitely
  while(true) {
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    yield ((t ^ t >>> 14) >>> 0) / 4294967296;
  }
}

// Use the same seed to get the same sequence.
const seed = 98345;

const randGenerator = mulberry32(seed);
console.log(randGenerator.next().value);  // 0.9057375795673579
console.log(randGenerator.next().value);  // 0.44091642647981644
console.log(randGenerator.next().value);  // 0.7662326360587031

console.groupEnd();