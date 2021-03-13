const numbersWithDuplicates = [2, 42, 5, 42, 304, 1, 13, 2, 13];
const uniqueNumbers = [...new Set(numbersWithDuplicates)];

console.log(`Changed ${numbersWithDuplicates} to ${uniqueNumbers}`);