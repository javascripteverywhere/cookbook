/* eslint-disable no-undef */
// set data for both session and cookie
function setData() {
  const key = document.getElementById('key').value;
  const { value } = document.getElementById('value');

  // set sessionStorage
  sessionStorage.setItem(key, value);

  // set localStorage
  localStorage.setItem(key, value);

  // set cookie
  setCookie(key, value);
}

function getData() {
  try {
    const key = document.getElementById('key').value;
    const session = document.getElementById('sessionstr');
    const local = document.getElementById('localstr');
    const cookie = document.getElementById('cookiestr');

    // reset display
    session.innerHTML = '';
    local.innerHTML = '';
    cookie.innerHTML = '';

    // sessionStorage
    let value = sessionStorage.getItem(key) || '';
    if (value) session.innerHTML = `<p>${value}</p>`;

    // localStorage
    value = localStorage.getItem(key) || '';
    if (value) local.innerHTML = `<p>${value}</p>`;

    // cookie
    value = getCookie(key) || '';
    if (value) cookie.innerHTML = `<p>${value}</p>`;
  } catch (e) {
    console.log(e);
  }
}

function removeData() {
  const key = document.getElementById('key').value;

  // sessionStorage
  sessionStorage.removeItem(key);

  // localStorage
  localStorage.removeItem(key);

  // cookie
  eraseCookie(key);

  // reset display
  getData();
}

document.getElementById('set').onclick = setData;
document.getElementById('get').onclick = getData;
document.getElementById('erase').onclick = removeData;
