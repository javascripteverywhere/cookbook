// select all elements that have a class attribute
const elems = document.querySelectorAll('*[class]');
elems.forEach(elem => {
  console.log(`The following element has a class attribute: ${elem}`);
});

// select all elements that have the 'red' class
const reds = document.querySelectorAll('*[class="red"]');
reds.forEach(red => {
  console.log(
    `The following element has a class attribute with a red value: ${red}`
  );
});
