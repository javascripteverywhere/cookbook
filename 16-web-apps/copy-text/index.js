const copyText = document.getElementById('copy-text');
const copyButton = document.getElementById('copy-button');

const copyToClipboard = () => {
  copyText.select(); 
  document.execCommand("copy");
}

copyButton.addEventListener('click', copyToClipboard);