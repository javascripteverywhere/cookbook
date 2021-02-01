window.onload = function() {
  const square = document.getElementById('square');

  // onclick event handler, change circle radius
  square.onclick = function click() {
    const color = this.getAttribute('fill');
    if (color === '#ff0000') {
      this.setAttribute('fill', '#0000ff');
    } else {
      this.setAttribute('fill', '#ff0000');
    }
  };
};
