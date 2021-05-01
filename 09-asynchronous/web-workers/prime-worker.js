function findPrimes(fromNumber, toNumber) {
  // Create an array containing all integers between the two specified numbers.
  
  const list = [];
  for (let i = fromNumber; i <= toNumber; i+=1) {
    if (i>1) {      
      list.push(i);      
    } 
  }

  // Test for primes
  const maxDiv = Math.round(Math.sqrt(toNumber));
  const primes = [];

  for (let i = 0; i < list.length; i+=1) {
    let failed = false;
    for (let j = 2; j <= maxDiv; j+=1) {
      if ((list[i] !== j) && (list[i] % j === 0)) {
        failed = true;
      } else if ((j === maxDiv) && (failed === false)) {
        primes.push(list[i]);
      }
    }
  }

  return primes;
}

onmessage = event => { 
  // Perform the prime number search
  console.log('Worker received message');
  console.log(event.data);
  
  const primes = findPrimes(Number(event.data.from), Number(event.data.to));

  // Send back the result
  console.log('Worker sending message');
  postMessage(primes);
};