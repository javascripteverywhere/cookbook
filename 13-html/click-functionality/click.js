/* eslint-disable no-alert */

const clickHandler = event => {
  event.preventDefault();
  window.alert(`The ${event.currentTarget.nodeName} element has been clicked!`);
};

const btn = document.getElementById('click-button');
const href = document.getElementById('click-link');
const div = document.getElementById('click-div');
btn.addEventListener('click', clickHandler);
href.addEventListener('click', clickHandler);
div.addEventListener('click', clickHandler);

// add keyboard event listener to div for a11y
div.addEventListener('keydown', event => {
  if (event.code === 'Space' || event.code === 'Enter') {
    div.click();
  }
});
