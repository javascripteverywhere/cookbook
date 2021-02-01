const items = document.querySelectorAll('li');

items.forEach(item => {
  console.log(item.firstChild.data);
});
