// Merging two objects
const address = {
  country: 'Australia', city: 'Sydney', streetNum: '412',
  streetName: 'Worcestire Blvd'
};

const customer = {
  firstName: 'Lisa', lastName: 'Stanecki'
};

const customerWithAddress = {...customer, ...address};
console.log(customerWithAddress);
// The customerWithAddress now has all six properties


// Merging two objects that have the same property
// The last-set property wins
const customerWithCountry = {
  firstName: 'Lisa', lastName: 'Stanecki', country: 'South Korea'
};

const customerConflict1 = {...customerWithCountry, ...address};
console.log(customerConflict1.country);  // Shows 'Australia'

const customerConflict2 = {...address, ...customerWithCountry};
console.log(customerConflict2.country);  // Shows 'South Korea'