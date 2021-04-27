const someNumber = 1242.0005;

// Ask for exactly 2 decimal points. Numbers will be rounded if necessary.
const fixedString = someNumber.toFixed(2);
// fixedString = '1242.00'
console.log(`${someNumber} with toFixed(2) is ${fixedString}`);

// Ask for 5 significant digits. Scientific notation is used if necessary.
const precisionString = someNumber.toPrecision(5);
// precisionString = '1242.0'
console.log(`${someNumber} with toPrecision(5) is ${precisionString}`);

// Ask for scientific notation with 2 decimal plates.
const scientificString = someNumber.toExponential(2);
// scientificString = '1.24e+3'
console.log(`${someNumber} with toExponential(2) is ${scientificString}`);


const formatter =
 new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

const moneyString = formatter.format(someNumber);
console.log(`${someNumber} with a U.S. currency formatted is ${moneyString}`);