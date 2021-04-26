function sumRounds(...numbers) {
  let sum = 0;
  for(let i = 0; i < numbers.length; i+=1)  {
    sum += Math.round(numbers[i]);
  }
  return sum;
}

console.log(sumRounds(2.3, 4, 5, 16, 18.1));  // 45