// 'use strict';
// Remove the // comment marker above to test this example in strict mode

// Create a read-only property
const data = {};
Object.defineProperty(data, 'type', {
  value: 'primary',
  enumerable: true
});

// Attempt to change the read-only property
console.log(data.type); // primary
data.type = 'secondary';
console.log(data.type); // nope, still primary

// Create a writeable property
Object.defineProperty(data, 'id', {
  value: 1,
  writable: true
});

// Change this modifiable property
console.log(data.id); // 1
data.id = 300;
console.log(data.id); // 300


// Create a calculated property
const person = {
  firstName: 'Joe',
  lastName: 'Khan',
  dateOfBirth: new Date(1996, 5, 12)
};

Object.defineProperty(person, 'age', {
  configurable: true,
  enumerable: true,
  get: function get() {    
    // Calculate the difference in years
    const today = new Date();
    let age = today.getFullYear() - this.dateOfBirth.getFullYear();
    
    // Adjust if the bithday hasn't happened yet this year
    const monthDiff = today.getMonth() - this.dateOfBirth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < this.dateOfBirth.getDate())) {      
      age -= 1;
    }
    
    return age;
  }
});

console.log(`Age of person born ${person.dateOfBirth.toDateString()} is ${person.age}`); 