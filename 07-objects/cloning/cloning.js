// Shallow clone
const animal = {
  name: 'Red Fox', class: 'Mammalia', order: 'Carnivora',
  family: 'Canidae', genus: 'Vulpes', species: 'Vulpes vulpes'
};

const animalCopy = {...animal};
console.log(`Testing simple clone: ${animalCopy.species}`);  // 'Vulpes vulpes'

// Demonstrate the difference between shallow and deep clones with nested
// objects

// This function uses the standard shallow copy approach
function cloneStudentShallow(student) {
  const studentCopy = {...student};
  return studentCopy;
}

// This function performs a customized copy that goes deeper
function cloneStudentDeep(student) {
  // Start with a shallow copy
  const studentCopy = {...student};

  // Now duplicate the array (by expanding it with spread)
  studentCopy.testScores = [...studentCopy.testScores];

  return studentCopy;
}

// Create a new student
const student = {
  firstName: 'Tazie', lastName: 'Yang',
  testScores: [78, 88, 94, 91, 88, 96]
};

console.group('Shallow clone test');
const shallowStudentCopy = cloneStudentShallow(student);

// Now there are two objects sharing the same testScores array
// We can see this if we change some details.
// This affects just the copy:
shallowStudentCopy.firstName = 'Dori';
// This affects both objects:
shallowStudentCopy.testScores[0] = 56;

console.log(student.testScores[0]);      // 56
console.log(shallowStudentCopy.testScores[0]);  // 56

console.groupEnd();
console.group('Deep clone test');
// Create a truly independent student copy
const deepStudentCopy = cloneStudentDeep(student);

// Verify the arrays are separate
deepStudentCopy.testScores[1] = 56;

console.log(student.testScores[1]);      // 88
console.log(deepStudentCopy.testScores[1]);  // 56
console.groupEnd();