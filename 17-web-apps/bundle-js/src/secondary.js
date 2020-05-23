import dayjs from 'dayjs';

function time() {
  const element = document.createElement('div');

  const now = dayjs();
  element.innerHTML = now.format('MM-DD-YYYY HH:mm:ss a');

  return element;
}

document.body.appendChild(time());
