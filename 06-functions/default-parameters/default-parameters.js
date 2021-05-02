function addNumbers(firstNum=10, secondNum=20, thirdNum=30, multiplier=1) {
  return multiplier*(firstNum+secondNum+thirdNum);
}

// With three default values
console.log(addNumbers(42));  // 92

// With an out-of-order default value
console.log(addNumbers(42, 10, undefined, 1));  // 82

// A failed attempt to omit a value (use undefined, not null)
console.log(addNumbers(42, 10, null, 1));  // 52