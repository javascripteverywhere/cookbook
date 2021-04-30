// 'use strict';
// Remove the // comment marker above to test this example in strict mode

const customer = {
  firstName: 'Josephine',
  lastName: 'Stanecki'
};
  
console.log(customer);
console.log('Change customer name');
customer.firstName = 'Jo';
console.log(customer);

console.log('Freeze customer object');
Object.freeze(customer);

console.log('Attempt to change customer name');
// This fails silently (or throws an exception in strict mode)
customer.firstName = 'Jose';

// This will also fail when frozen
customer.middleInitial = 'P';
  
// This will also fail when frozen
delete customer.lastName;

console.log(customer);