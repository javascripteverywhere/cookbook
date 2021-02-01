// set the cookie
function setData() {
  const formKey = document.getElementById('key').value;
  const formValue = document.getElementById('value').value;

  const cookieVal = `${formKey}=${encodeURIComponent(formValue)}`;
  document.cookie = cookieVal;
}

// retrieve the cookie value for a specified key
function getData() {
  const key = document.getElementById('key').value;
  const cookie = document.getElementById('cookiestr');
  cookie.innerHTML = '';

  const keyValue = key.replace(/([.*+?^=!:${}()|[\]/\\])/g, '\\$1');
  const regex = new RegExp(`(?:^|;)\\s?${keyValue}=(.*?)(?:;|$)`, 'i');
  const match = document.cookie.match(regex);
  const value = (match && decodeURIComponent(match[1])) || '';
  cookie.innerHTML = `<p>${value}</p>`;
}

// remove the cookie for a specified key
function removeData() {
  const key = document.getElementById('key').value;
  document.getElementById('cookiestr').innerHTML = '';

  const cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC`;
  document.cookie = cookie;
}

document.getElementById('set').onclick = setData;
document.getElementById('get').onclick = getData;
document.getElementById('erase').onclick = removeData;
