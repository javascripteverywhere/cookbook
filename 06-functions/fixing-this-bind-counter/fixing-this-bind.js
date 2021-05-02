// This is the constructor function for the Counter object.
function Counter(from, to, divElement) {
  this.currentCount = from;
  this.finishCount = to;
  this.element = divElement;

  // The incrementCounter() method updates the page
  this.incrementCounter = function incrementCounter() {    
    this.currentCount -= 1;
    this.element.textContent = this.currentCount;
  
    if (this.currentCount > this.finishCount) {    
      // Schedule this function to run again after 1 second.
      // The commented out statement is the approach without this.bind(), which fails
      // setTimeout(this.incrementCounter, 1000);  
      setTimeout(this.incrementCounter.bind(this), 1000);
    }
  };

  this.startCounter = function startCounter() {    
    this.incrementCounter();
  }
}

// Create the counter for this page.
const counter = new Counter(10, 0, document.getElementById('counterDiv'));

// When the page loads, start the counter.
window.onload = function onload() {    
  counter.startCounter();
}
