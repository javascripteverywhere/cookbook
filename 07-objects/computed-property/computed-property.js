// Object literal with nested object
const employee = {
  employeeId: 402,
  firstName: 'Lisa',
  lastName: 'Stanecki',
  birthPlace: {country: 'Canada', city: 'Toronto'}
};
console.log(employee.birthPlace.city);  // 'Toronto'

// Add a dynamically named property (nickname)
const dynamicProperty = 'nickname';
const dynamicPropertyValue = 'The Izz';
employee[dynamicProperty] = dynamicPropertyValue;
// Now employee.nickname = 'The Izz'
console.log(employee.nickname);

// Add a computed property name (sequence10)
const i = 10;
employee[`sequence${i}`] = 'Another new property value';
console.log(employee.sequence10);