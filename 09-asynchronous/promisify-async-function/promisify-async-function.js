// The original function
function factorializeNumber(number, successCallback, failureCallback) {
  if (number < 0) {
    failureCallback(
      new Error('Factorials are only defined for positive numbers'));
  }
  else if (number !== Math.trunc(number)) {
    failureCallback(new Error('Factorials are only defined for integers'));
  }
  else {
    setTimeout( () => {
      if (number === 0 || number === 1) {
        successCallback(1);
      }
      else {
        let result = number;
        let currentNumber = number;
        while (currentNumber > 1) {
          currentNumber -= 1;
          result *= currentNumber;
        }
        successCallback(result);
      }
    }, 5000);  // This hard-coded 5 second delay simulates a long async process
  }
}

// The wrapper
function factorializeNumberPromise(number) {
  return new Promise((resolve, reject) => {
    factorializeNumber(number,
      result => {
        resolve(result);
      },
      error => {
        reject(error);
      });
  });
}

// Using the wrapper
console.log('Creating the promise');
factorializeNumberPromise(6).then( result => {
  console.log(`6! = ${result}`);
});
console.log('Now it\'s all over except the waiting...');