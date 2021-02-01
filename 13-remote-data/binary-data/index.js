async function fetchImage() {
  const url = 'logo.png';
  const response = await fetch(url);
  const blob = await response.blob();

  // add returned url to image element
  const img = document.getElementById('result');
  img.src = URL.createObjectURL(blob);
}

fetchImage();
