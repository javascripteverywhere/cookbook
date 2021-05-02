async function getImage() {
  const url =
  'https://upload.wikimedia.org/wikipedia/commons/b/b2/Eagle_nebula_pillars.jpg';
 
  // Wait (asynchronously) for the response
  const response = await fetch(url);
 
  if (response.ok) {
    // Wait (asynchronously) for the blob to be read
    const blob = await response.blob();
 
    // Now show the image
    const img = document.getElementById('imgDownload');
    img.src = URL.createObjectURL(blob);
  }
}

function downloadImage() {
  getImage().then(() => {
     console.log('All asynchronous steps completed');
  });
}

document.getElementById('startCall').addEventListener('click', downloadImage);