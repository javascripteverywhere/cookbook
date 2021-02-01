// modify the property value via the element's style property
const description = document.getElementById('description');
description.style.fontSize = '1.2em';

// modify one or more CSS properties for a single element with setAttribute()
const card = document.getElementById('card');
card.setAttribute(
  'style',
  'background-color: #ecf0f1; color: #2c3e50; padding: 10px; font-family: sans-serif'
);

// set the class property for the element
card.setAttribute('class', 'inline');

// get the computed styles for an element
const style = window.getComputedStyle(card);
console.log(style);
