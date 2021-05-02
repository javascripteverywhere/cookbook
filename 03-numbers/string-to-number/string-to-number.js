// The canonical approach
const stringData = '42';
const numberData = Number(stringData);
console.log(numberData);

// Compared to parseFloat():
console.log(Number('42'));               // 42
console.log(parseFloat('42'));           // 42

console.log(Number('12 goats'));         // NaN
console.log(parseFloat('12 goats'));     // 12

console.log(Number('goats 12'));         // NaN
console.log(parseFloat('goats 12'));     // NaN

console.log(Number('2001/01/01'));       // NaN
console.log(parseFloat('2001/01/01'));   // 2001

console.log(Number(' '));                // 0
console.log(parseFloat(' '));            // NaN