/* eslint-disable max-classes-per-file */
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

// This Employee class could _inherit_ from Person, but instead
// it _contains_ a Person.
class Employee {
  constructor(person, department, hireDate) {
    // person is a full-fledged Person object
    this.person = person;

    // These properties hold the extra, non-person information
    this.department = department;
    this.hireDate = hireDate;
  }
}

// Create an Employee object that's composed of a Person object
// and some extra details
const employee = new Employee(new Person('Michael', 'Scott'), 'Sales', new Date());
console.log('Combined Employee-Person:');
console.log(employee);