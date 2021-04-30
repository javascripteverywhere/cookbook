/* eslint-disable no-underscore-dangle */
class Person2 {
  constructor(firstName, lastName, date) {
    this.firstName = firstName;
    this.lastName = lastName;

    // Set the date using the property setter so a Person
    // can't be created in an invalid state
    this.dateOfBirth = date;
  }

  // Just return the date with no extra processing
  get dateOfBirth() {
    return this._dateOfBirth;
  }

  // Don't allow dates in the future
  set dateOfBirth(value) {
    if (value instanceof Date && value < Date.now()) {
      // This is a valid date
      this._dateOfBirth = value;
    }
    else {
      throw new TypeError('Birthdate cannot be in the future');
    }
  }
}

console.log('Test the Person.dateOfBirth property');
const newPerson2 = new Person2('Luke', 'Takei', new Date(1990, 5, 22));
console.log(newPerson2.dateOfBirth);

// This change is allowed
newPerson2.dateOfBirth = new Date(2010, 10, 10);
console.log(newPerson2.dateOfBirth);

// This change is ignored
newPerson2.dateOfBirth = new Date(2035, 10, 10);
console.log(newPerson2.dateOfBirth);
