const copyText = document.getElementById('copy-text');
const copyButton = document.getElementById('copy-button');

const copyToClipboard = () => {
  copyText.select();
  navigator.clipboard.writeText(copyText.value);
};

copyButton.addEventListener('click', copyToClipboard);
