const products = new Map();

// Add three items
products.set('RU007', {name: 'Rain Racer 2000', price: 1499.99});
products.set('STKY1', {name: 'Edible Tape', price: 3.99});
products.set('P38', {name: 'Escape Vehicle (Air)', price: 2999.00});

// Check for two items using the item code
console.log(products.has('RU007')); // true
console.log(products.has('RU494')); // false

// Retrieve an item
const product = products.get('P38');
if (typeof product !== 'undefined') {
 console.log(product.price); // 2999
}

// Remove the Edible Tape item
products.delete('STKY1');
console.log(products.size); // 2