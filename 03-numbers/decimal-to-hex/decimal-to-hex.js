// Conversions from base-10
const decNum = 55;
const octNum = decNum.toString(8);   // value of 67 octal
const hexNum = decNum.toString(16);  // value of 37 hexadecimal
const binNum = decNum.toString(2);   // value of 110111 binary
console.log(`${decNum} is ${octNum} in octal, ${hexNum} in hex, and ${binNum} in binary`);

// Conversions to base-10
const octalNumber = 0o255;
console.log(octalNumber);    // equivalent to 173 decimal
const hexNumber = 0xad;      
console.log(hexNumber);      // equivalent to 173 decimal