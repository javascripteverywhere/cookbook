// An alternate implementation that sets methods on the prototype,
// which is sometimes used in scenarios with inheritance
function PersonAlt(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// Add function to the Person prototype to represent a method
PersonAlt.prototype.swapNames = function swapNames() {
  [this.firstName, this.lastName] = [this.lastName, this.firstName];
}

console.log('Test prototype version');

const newPersonAlt = new PersonAlt('Luke', 'Takei');
console.log(newPersonAlt.firstName);  // 'Luke'
newPersonAlt.swapNames();
console.log(newPersonAlt.firstName);  // 'Takei'