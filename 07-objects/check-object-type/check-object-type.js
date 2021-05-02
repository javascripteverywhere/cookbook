const mysteryPrimitive = 42;
const mysteryObject = new Date();

if (typeof mysteryPrimitive === 'number') {
  console.log('mysteryPrimitive is a number');
}

if (typeof mysteryObject === 'object') {
  // This code runs, because a Date is an object, not a primitive
  console.log('mysteryObject is an object');

  if (mysteryObject instanceof Date) {
    // This code also runs
    console.log('mysteryObject is a Date');
  }
}