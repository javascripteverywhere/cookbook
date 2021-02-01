/* eslint-disable no-alert */
// use getElementById to access the div element
const div = document.getElementById('target');

// get paragraph text
const txt = prompt('Enter new paragraph text', '');

// use getElementsByTagName and the collection index
// to access the first paragraph
const oldPara = div.getElementsByTagName('p')[0];

// create a text node
const txtNode = document.createTextNode(txt);

// create a new paragraph
const para = document.createElement('p');

// append the text to the paragraph, and insert the new para
para.appendChild(txtNode);
div.insertBefore(para, oldPara);
