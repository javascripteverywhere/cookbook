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
  let previousProgress = 0;

  for (let i = 0; i < list.length; i+=1) {
    let failed = false;
    for (let j = 2; j <= maxDiv; j+=1) {
      if ((list[i] !== j) && (list[i] % j === 0)) {
        failed = true;
      } else if ((j === maxDiv) && (failed === false)) {
        primes.push(list[i]);
      }
    }

    // Give a progress update
    const progress = Math.round(i/list.length*100);
    if (progress !== previousProgress) {
      postMessage({messageType: "Progress", data: progress});
      previousProgress = progress;
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
  postMessage({messageType: "PrimeList", data: primes});
};