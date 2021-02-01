const data = ['Hello 0', 'Hello 1', 'Hello 2'];

// compute position for pop up
function compPos(obj) {
  const rect = obj.getBoundingClientRect();
  let height;
  if (rect.height) {
    height = rect.height;
  } else {
    height = rect.bottom - rect.top;
  }
  const top = rect.top + height + 10;
  return [rect.left, top];
}

// process return
function showWindow(id, response) {
  const img = document.getElementById(id);

  console.log(img);
  // derive location for pop up
  const loc = compPos(img);
  const left = `${loc[0]}px`;
  const top = `${loc[1]}px`;

  console.log(left, top);

  // create pop up
  const div = document.createElement('popup');
  div.id = 'popup';
  const txt = document.createTextNode(response);
  div.appendChild(txt);

  // style pop up
  div.setAttribute('class', 'popup');
  div.setAttribute('style', `position: fixed; left: ${left}; top: ${top}`);
  document.body.appendChild(div);
}

function getInfo(id) {
  showWindow(id, data[id]);
}

function removeWindow() {
  const popup = document.getElementById('popup');
  if (popup) popup.parentNode.removeChild(popup);
}

window.onload = () => {
  const imgs = document.querySelectorAll('img');
  imgs.forEach(img => {
    img.addEventListener(
      'mouseover',
      () => {
        getInfo(img.id);
      },
      false
    );

    img.addEventListener(
      'mouseout',
      () => {
        removeWindow();
      },
      false
    );
  });
};
