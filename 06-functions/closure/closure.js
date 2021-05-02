function greetingMaker(greeting) {
  function addName(name) {
    return `${greeting} ${name}`;
  }
  return addName;
}

// Use the outer function to create two copies of the inner function,
// each with a different value for greeting
const daytimeGreeting = greetingMaker('Good Day to you');
const nightGreeting = greetingMaker('Good Evening');

console.log(daytimeGreeting('Peter'));   // Shows 'Good Day to you Peter'
console.log(nightGreeting('Sally'));     // Shows 'Good Evening Sally'


function createCounter() {
  // This variable persists as long as the createCounter function reference
  let count = 0;

  function counter() {
    count += 1;
    console.log(count);
  }
  return counter;
}

const counterFunction = createCounter();
counterFunction();  // displays 1
counterFunction();  // displays 2
counterFunction();  // displays 3