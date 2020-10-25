const element = document.getElementById('example-element');
const toggle = document.getElementById('toggle');
const add = document.getElementById('add');
const remove = document.getElementById('remove');

const toggleStyle = () => {
  element.classList.toggle('toggle-me');
};

const addStyle = () => {
  element.classList.add('new-class');
};

const removeStyle = () => {
  if (element.classList.contains('new-class')) {
    element.classList.remove('new-class');
  }
};

toggle.addEventListener('click', toggleStyle);
add.addEventListener('click', addStyle);
remove.addEventListener('click', removeStyle);
