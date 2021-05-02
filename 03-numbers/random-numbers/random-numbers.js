// General formula is:
// randomNumber = Math.floor(Math.random() * (max - min + 1) ) + min;

// Get 10 random numbers from 1-6
for (let i=0; i<10; i+=1) {
  const randomNumber = Math.floor(Math.random()*6) + 1;
  console.log(randomNumber);
}