// Using the destructuring syntax
const stateValues = [459, 144, 96, 34, 0, 14];
const [arizona, missouri, idaho, nebraska, texas, minnesota] = stateValues;
console.log(missouri); // 144


// Unfolding an array into a list of values with spread
const numbers = [2, 42, 5, 304, 1, 13];

// This syntax is not allowed. The result is NaM.
console.log(Math.max(numbers));

// But this works, thanks to the spread operator. (The answer is 304.)
console.log(Math.max(...numbers));
