const newObj = {};

// Set a unique property that will never clash with anything else
// A descriptive Symbol name is not necessary (it's primarily useful for
// identification while debugging), but ESLint rules require it
const uniqueId = Symbol('dynamicProp1');
newObj[uniqueId] = 'No two alike';

// Set another one
const anotherUniqueId = Symbol('dynamicProp2');
newObj[anotherUniqueId] = 'This will not clash, either';

console.log(newObj);