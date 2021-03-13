// Flattening 2D array
const fruitArray = [];
// Add three elements to fruitArray
// Each element is an array of strings
fruitArray[0] = ['strawberry', 'blueberry', 'raspberry'];
fruitArray[1] = ['lime', 'lemon', 'orange', 'grapefruit'];
fruitArray[2] = ['tangerine', 'apricot', 'peach', 'plum'];
console.log(fruitArray);
console.log(fruitArray.flat());
// Now fruitList has 11 elements, and each one is a string


// Flattening an array with several levels of nested arrays inside
const threeDimensionalNumbers = [1, [2, [3, 4, 5], 6], 7];
// The default flattening
console.log(threeDimensionalNumbers.flat(1));
// now flat2D = [1, 2, [3, 4, 5], 6, 7]
// Flatten two levels
console.log(threeDimensionalNumbers.flat(2));
// now flat1D = [1, 2, 3, 4, 5, 6, 7]
// Flatten all levels, no matter how many there are
console.log(threeDimensionalNumbers.flat(Infinity));