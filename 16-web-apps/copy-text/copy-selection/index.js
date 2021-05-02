const copyText = document.getElementById('copy-text');
const copyButton = document.getElementById('copy-button');

const copyToClipboard = () => {
  const selection = document.getSelection();
  copyText.value = `${selection} — Check out my highlight at https://example.com `;
  copyText.select();
  navigator.clipboard.writeText(copyText.value);
};

copyButton.addEventListener('click', copyToClipboard);
