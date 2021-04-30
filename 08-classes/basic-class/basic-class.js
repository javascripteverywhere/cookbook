class Person {
  constructor(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
	this.dateOfBirth = dateOfBirth;
  }

  // This is a method
  swapNames() {
    [this.firstName, this.lastName] = [this.lastName, this.firstName];
  }
}

// Test the Person class
const newPerson = new Person('Luke', 'Takei', new Date(1990, 5, 22));
console.log(`First name: ${newPerson.firstName}`);   // 'Luke'
console.log('Calling swapNames() method');
newPerson.swapNames();
console.log(`First name: ${newPerson.firstName}`);   // 'Takei'