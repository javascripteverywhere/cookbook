const imgs = document.querySelectorAll('article img');
imgs.forEach(img => {
  console.log(img.getAttribute('src'));
});
