// A function that returns Error with a custom message
function strictDivision(number, divisor) {
  if (Number(divisor) === 0) {
    throw new Error('Dividing by zero is not allowed');
  }
  else {
    return number/divisor;
  }
}
  
// Catch the error with the custom message
try {
  const result = strictDivision(42, 0);
  console.log(result);
}
catch (error) {
  // Show the custom error message
  console.log(`Error: ${error.message}`);
}

// A custom error class that represents a special error condition
class ProductNotFound extends Error {
  constructor(missingProductID, message) {
    super(message);
    this.name = 'ProductNotFound';
    this.productID = missingProductID;
  
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ProductNotFound);
    }
  }
}

// Catch an instance of the custom error
try {
  throw new ProductNotFound(420, 'ProductID does not exist in the catalog.');
}
catch (error) {
  console.log(`An error occured with the message: ${error.message}`);
  
  if (error instanceof ProductNotFound) {
    console.log(`Missing: ${error.productID}`);
  }
}