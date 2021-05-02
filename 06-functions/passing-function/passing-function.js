// Approach #1. Using a normal function block.
function buttonClicked() {
  // Declare a nested function to use with setTimeout()
  function showMessage() {
    alert('You clicked the button 2 seconds ago');
  }
  
  // Trigger the function after 2000 milliseconds (2 seconds)
  setTimeout(showMessage, 2000);
 }
    
// // Approach #2. Using a function expression.
// function buttonClicked() {
//   // Declare a function expression to use with setTimeout()
//   const timeoutCallback = function showMessage() {
//     alert('You clicked the button 2 seconds ago');
//   }
  
//   // Trigger the function after 2000 milliseconds (2 seconds)
//   setTimeout(timeoutCallback, 2000);
// }

// // Approach #3. Using an inline function.
// function buttonClicked() {
//   // Trigger the function after 2000 milliseconds (2 seconds)
//   setTimeout(function showMessage() {
//     alert('You clicked the button 2 seconds ago');
//   }, 2000);
// }
  
// Attach button event handler.
document.getElementById('runTest').addEventListener("click", buttonClicked);
