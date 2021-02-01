/* eslint-disable no-param-reassign */
// store the form input elements as a variable
const elems = document.querySelectorAll('input');

// store field values
function processField() {
  localStorage.setItem(window.location.href, 'true');
  localStorage.setItem(this.id, this.value);
}

// clear individual fields
function clearStored() {
  elems.forEach(elem => {
    if (elem.type === 'text') {
      localStorage.removeItem(elem.id);
    }
  });
}

// capture submit button to clear storage when clicked
document.getElementById('inputform').onsubmit = clearStored;

// on form element change, store the value in localStorage
elems.forEach(elem => {
  if (elem.type === 'text') {
    const value = localStorage.getItem(elem.id);
    if (value) elem.value = value;

    // change event
    elem.onchange = processField;
  }
});
