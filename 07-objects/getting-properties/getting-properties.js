/* eslint-disable no-restricted-syntax */
const address = {
  country: 'Australia',
  city: 'Sydney',
  streetNum: '412',
  streetName: 'Worcestire Blvd'
};

// Check for specific properties
if ('country' in address) {
  console.log('address.country exists');
}

if (!('zipCode' in address)) {
  console.log('address.zipCode does not exist');
}

const properties = Object.keys(address);
console.log(`The address object has a length of ${properties.length}`);

for (const property of properties) {
  console.log(`Property: ${property}, Value: ${address[property]}`);
}

// You can also iterate with for...in
// for (const property in address) {
//   console.log(`Property: ${property}, Value: ${address[property]}`);
// }

// Or with Object.entries()
// const entries = Object.entries(address);
// for (let i = 0; i < properties.length; i+=1) {
//   console.log(`${entries[i][0]} : ${entries[i][1]}`);
// }