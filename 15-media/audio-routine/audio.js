function aboutAudio() {
  const info = 'A summer field near a lake in July.';
  const txt = document.createTextNode(info);
  const div = document.createElement('div');
  div.appendChild(txt);
  document.body.appendChild(div);
}

const meadow = document.getElementById('meadow');
meadow.addEventListener('play', aboutAudio);
