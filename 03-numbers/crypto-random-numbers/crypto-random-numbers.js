// Get the random fraction (0 < x < 1)
const randomBuffer = new Uint32Array(1);
window.crypto.getRandomValues(randomBuffer);
const randomFraction = randomBuffer[0] / (0xffffffff + 1);

// Use it to make a random integer from 1-6
const randomNumber = Math.floor(randomFraction*6) + 1;
console.log(randomNumber);