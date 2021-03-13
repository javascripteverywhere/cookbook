// The testing function
function testValue (element,index,array) {
  const textExp = /^[a-zA-Z]+$/;
  return textExp.test(element);
}

// Test an array
const mysteryItems = ['**', 123, 'aaa', 'abc', '-', 46, 'AAA'];
let result = mysteryItems.every(testValue);
console.log(`mysteryItems pass: ${result}`); // false

// Test another array
const mysteryItems2 = ['elephant', 'lion', 'cat', 'dog'];
result = mysteryItems2.every(testValue);
console.log(`mysteryItems2 pass: ${result}`);  // true