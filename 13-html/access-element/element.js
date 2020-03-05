// select the element
const demodiv = document.getElementById('demodiv');
console.log(demodiv);

// select the parent of the element
const parent = demodiv.parentNode;
console.log(parent);

// select the children
const children = demodiv.childNodes;
console.log(children);

// traverse collection of child elements
let outputString = '';

if (demodiv.hasChildNodes()) {
  children.forEach(child => {
    outputString += `has child ${child.nodeName} `;
  });
}
console.log(outputString);
