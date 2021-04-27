const sentence = 'This is one sentence. This is a sentence with a list of items:' +
'cherries, oranges, apples, bananas. That was the list of items.';
const start = sentence.indexOf(':');
const end = sentence.indexOf('.', start + 1);

const list = sentence.slice(start + 1, end);
// list = 'cherries, oranges, apples, bananas'

let fruits = list.split(',');
// now fruits has these elements: ['cherries', ' oranges', ' apples', '
// bananas']

fruits = fruits.map(s => s.trim());
// now fruits has these elements: ['cherries', 'oranges', 'apples', 'bananas']

console.log(fruits);