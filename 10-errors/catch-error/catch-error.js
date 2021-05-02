console.group('Basic try/catch/finally');

try {
  const uri = decodeURI('http%test');

  // We never get here
  console.log(uri);
}
catch (error) {          
  console.log(error);
}
finally {
  console.log('The operation (and any error handling) is complete');
}

console.groupEnd();

console.group('Catch errors by type');

try {
  const uri = decodeURI('http%test');

  // We never get here
  console.log(uri);
}
catch (error) {          
  if (error instanceof URIError) {
    console.log('URIError');
  }
  else if (error instanceof TypeError) {
    console.log('TypeError');
  }    
  else {
    // Rethrow errors we don't know how to handle
    throw error;
  }
}
finally {
  console.log('The operation (and any error handling) is complete');
}
  
console.groupEnd();