const people = [
  { firstName: 'Joe', lastName: 'Khan', age: 21 },
  { firstName: 'Dorian', lastName: 'Khu', age: 15 },
  { firstName: 'Tammy', lastName: 'Smith', age: 41 },
  { firstName: 'Noor', lastName: 'Biles', age: 33 },
  { firstName: 'Sumatva', lastName: 'Chen', age: 19 }
  ];

console.log(people);
// Sort the people from youngest to oldest

const peopleAgeSorted = [...people];
peopleAgeSorted.sort( function(a, b) {
 // Subtract the ages to sort from youngest to oldest
 return a.age - b.age;
});

console.log(peopleAgeSorted);
// Now the order is Dorian, Sumatva, Joe, Noor, Tammy

const peopleNameSorted = [...people];
peopleNameSorted.sort((a,b) => a.lastName.localeCompare(b.lastName));
console.log(peopleNameSorted);
// Now the order is Noor, Sumatva, Joe, Dorian, Tammy