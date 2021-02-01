const inputElement = document.getElementById('file');
const result = document.getElementById('result');
const nameEl = document.getElementById('name');
const typeEl = document.getElementById('type');

function handleFile() {
  // read the contents of the file
  const file = this.files[0];
  const reader = new FileReader();
  // add 'load' event listener
  reader.addEventListener('load', event => {
    // create the image element and display it within the result div
    const img = document.createElement('img');
    img.setAttribute('src', event.target.result);
    img.setAttribute('width', '250');
    result.appendChild(img);
    // display the image name and file type
    const name = document.createTextNode(file.name);
    const type = document.createTextNode(file.type);
    nameEl.appendChild(name);
    typeEl.appendChild(type);
  });
  reader.readAsDataURL(file);
}

inputElement.addEventListener('change', handleFile, false);
