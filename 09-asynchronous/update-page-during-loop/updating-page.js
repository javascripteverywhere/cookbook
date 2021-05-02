function doWork() {
    // Get the <p> element to change
    const statusElement = document.getElementById('status');
  
    // Track the time and the number of passes through the loop
    const startTime = Date.now();
    let counter = 0;
  
    statusElement.innerText = 'Processing started';

    while ((Date.now() - startTime < 10000)) {
      counter += 1;
      statusElement.innerText = `Just generated number ${counter}`;
    }

    statusElement.innerText = 'Processing completed';
  }

  function doWorkInChunks() {
    // Get the <p> element to change
    const statusElement = document.getElementById('status');
 
    // Track the time and the number of passes through the loop
    const startTime = Date.now();
    let counter = 0;
 
    statusElement.innerText = 'Processing started';
 
    // Create an anonymous function that does one chunk of work
    const doChunkedTask = () => {
       if (Date.now() - startTime < 10000) {
         counter += 1;
         statusElement.innerText = `Just generated number ${counter}`;
 
         // Call the function again, for the next chunk
         window.setTimeout(doChunkedTask, 0);
       }
       else {
         statusElement.innerText = 'Processing completed';
      }
    };
 
   // Start the process by calling the function for the first time
   doChunkedTask();
 }

document.getElementById('doWork').addEventListener('click', doWork);
document.getElementById('doWorkInChunks').addEventListener('click', doWorkInChunks);
