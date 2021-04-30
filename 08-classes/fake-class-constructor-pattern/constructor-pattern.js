function Person(firstName, lastName) {
  // Store public data using 'this'
  this.firstName = firstName;
  this.lastName = lastName;

  // Add a nested function to represent a method
  this.swapNames = function swapNames() {
    [this.firstName, this.lastName] = [this.lastName, this.firstName];
  }
}

console.log('Test constructor pattern');

// Notice that the code for using this function is the same as the code for
// using a class with an identical constructor
const newPerson = new Person('Luke', 'Takei');
console.log(newPerson.firstName);  // 'Luke'

newPerson.swapNames();
console.log(newPerson.firstName);  // 'Takei'