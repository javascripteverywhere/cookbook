/* eslint-disable no-unused-vars */
// Unhandled synschronous errors trigger this event
window.onerror = (message, url, lineNo, columnNo, error) => {
  console.log(`An unhandled error occurred: message: ${message}, url: ${url}, lineNo: ${lineNo}`);  

  // Optionally, hide standard logging of error message in console by returning
  // true
  // Keep in mind that cross-origin security measures may prevent your JavaScript from
  // receiving the full error details
  // (see https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror#notes)
  // return true;
}
  
// Unhandled errors in asynchronous promises trigger this event
window.onunhandledrejection = (e) => {
  console.log(`An unhandled async error occured: ${e.reason}`);

  // Optionally, hide standard logging of rejected promise in console
  // Unhandled errors in promises will still be logged before this event is triggered
  e.preventDefault();
}
  
// Create a promise that rejects (also triggers window.onunhandledrejection)
const faultyPromise = new Promise((resolve, reject) => {
    throw new Error('Disaster strikes!');
});
 
// Create a promise that rejects
const rejectedPromise = new Promise((resolve, reject) => {
  reject(new Error('Another disaster strikes!'));
});

// Cause an unhandled synchronous error
console.log(null.length);