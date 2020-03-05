// get the target div
const div = document.getElementById('target');

// retrieve a collection of  paragraphs
const paras = div.getElementsByTagName('p');

// create the element and append text to it
const newPara = document.createElement('p');
const text = document.createTextNode('New paragraph content');
newPara.appendChild(text);

// if a third para exists, insert the new element before
// otherwise, append the paragraph to the end of the div
if (paras[2]) {
  div.insertBefore(newPara, paras[2]);
} else {
  div.appendChild(newPara);
}
