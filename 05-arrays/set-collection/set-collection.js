// Start with six elements
const animals = new Set(['elephant', 'tiger', 'lion', 'zebra', 'cat', 'dog']);

// Add two more
animals.add('rabbit');
animals.add('goose');

// Nothing happens, because this item is already in the Set
animals.add('tiger');

// Iterate over the Set, just as you would with an array
for (const animal of animals) {
 console.log(animal);
}