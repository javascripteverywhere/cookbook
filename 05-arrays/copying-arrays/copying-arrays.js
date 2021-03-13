const animals = ['elephant', 'tiger', 'emu', 'zebra', 'cat', 'dog', 'rabbit', 'eel', 'goose', 'earwig'];
console.log(`Original array: ${animals}`);

// Copy by position
// Get the chunk from index 4 to index 7.
const domestic = animals.slice(4, 7);
console.log(`Domestic: ${domestic}`);   // ['cat', 'dog', 'rabbit'];

// Put a new animal in the middle
const firstHalf = animals.slice(0, 3);
const secondHalf = animals.slice(4, animals.length);

const extraAnimals = [...firstHalf, 'platypus', ...secondHalf];
console.log(`Extra: ${extraAnimals}`);


// Copy by filter criteria
const animalsE = animals.filter(animal => animal[0].toLowerCase() === 'e');
console.log(`E letter: ${animalsE}`);