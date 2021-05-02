/* eslint-disable no-await-in-loop, no-unused-vars */
// An asynchronous generator for random integers
async function* getRandomIntegers(max) {
  while (true) {
    yield Math.floor(Math.random() * Math.floor(max) + 1);
  }
}

// An alternate asynchronous generator that uses a web API for random integers
async function* getRandomWebIntegers(max) {
  // Construct a URL to get a random number in the requested range
  const url = `https://www.random.org/integers/?num=1&min=1&max=${max}&col=1&base=10&format=plain&rnd=new`;

  while (true) {
    // Start the request (and wait asynchronously for the response)
    const response = await fetch(url);

    // Start reading the text asynchronously
    const text = await response.text();

    // Yield the result and wait for the next request
    yield Number(text);
  }
}

console.log('Creating async generator');
const randomGenerator = getRandomIntegers(6);
// If you would prefer to use the web generator, which has more latency (and so
// provides a more realistic test) use this line instead:
// const randomGenerator = getRandomWebIntegers(6);

// Get 10 random values between 1 and 6
for (let i=0; i<10; i+=1) {
  const promise = randomGenerator.next();
  console.log('Received promise.');
  promise.then(result => console.log(`Received result: ${result.value}`));
}
