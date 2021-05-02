// This will hold the web worker so it's accessible for cancellation
let worker;

function startSearch() {
  // Use this element to diplay progress information
  const statusDisplay = document.getElementById('status');  
 
  // Create the worker
  worker = new Worker('prime-worker.js');  

  statusDisplay.textContent = 'Search started.';
  
  // Report error message on the page
  worker.onerror = error => {    
    statusDisplay.textContent = error.message;
  };

  // Handle messages from the worker
  worker.onmessage = event => {
    console.log('Received a message from the worker');
    const primes = event.data;

    document.getElementById('primeContainer').textContent = primes.join(', ');    
  };
    
  // Get the search range and tell the worker to start
  document.getElementById('primeContainer').textContent = '';
  const fromNumber = document.getElementById('from').value;
  const toNumber = document.getElementById('to').value;
  worker.postMessage({from: fromNumber, to: toNumber});
  console.log('Worker started');
}

function cancelSearch() {
  console.log('Cancelling worker');  
  worker.terminate();
}

window.onload = function onload() {  
  document.getElementById('cancel').addEventListener('click', cancelSearch);
  document.getElementById('search').addEventListener('click', startSearch);
};
