function fibonacci(n) {
  return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
}

const num = 20;
console.log(`Factorial of ${num} is ${factorial(num)}`);

const pos = 15;
console.log(`Fibonacci number #${pos} is ${fibonacci(pos)}`);