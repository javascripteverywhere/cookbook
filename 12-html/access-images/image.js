// loop over all images
const imgElements = document.getElementsByTagName('img');
for (let i = 0; i < imgElements.length; i += 1) {
  const img = imgElements[i];
  console.log(img);
}

// append a new image
const imgs = document.getElementsByTagName('img');
console.log(imgs.length);
const p = document.createElement('p');
const img = document.createElement('img');
img.src = './img/someimg.jpg';
p.appendChild(img);

const paras = document.getElementsByTagName('p');
paras[0].parentNode.appendChild(p);

console.log(imgs.length);
