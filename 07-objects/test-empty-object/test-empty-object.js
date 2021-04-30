const blankObject = {};
const blankObject2 = new Object();    // eslint-disable-line no-new-object
const objectWithProperty = {price: 47.99};

if (Object.keys(blankObject).length === 0) {
  // This code runs because there's nothing in this object
  console.log('blankObject is empty')
}
if (Object.keys(blankObject2).length === 0) {
  // This code runs because there's nothing in this object
  console.log('blankObject2 is empty')
}
if (Object.keys(objectWithProperty).length === 0) {
  // This code won't run, because objectWithProperty isn't empty
  console.log('objectWithProperty is empty')
}

delete objectWithProperty.price;
if (Object.keys(objectWithProperty).length === 0) {
  // Now this code runs
  console.log('After deletion, objectWithProperty is empty')
}