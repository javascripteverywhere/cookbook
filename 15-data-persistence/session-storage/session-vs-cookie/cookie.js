/* eslint-disable no-unused-vars */
// set session cookie
function setCookie(cookie, value) {
  const cookieVal = `${cookie}=${encodeURIComponent(value)};path=/`;
  document.cookie = cookieVal;
  console.log(cookieVal);
}

// each cookie separated by semicolon;
function getCookie(key) {
  const keyValue = key.replace(/([.*+?^=!:${}()|[\]/\\])/g, '\\$1');
  const { cookie } = document;
  const regex = new RegExp(`(?:^|;)\\s?${keyValue}=(.*?)(?:;|$)`, 'i');
  const match = cookie.match(regex);

  return match && decodeURIComponent(match[1]);
}

// set cookie date to the past to erase
function eraseCookie(key) {
  const cookie = `${key}=;path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC`;
  document.cookie = cookie;
  console.log(cookie);
}
