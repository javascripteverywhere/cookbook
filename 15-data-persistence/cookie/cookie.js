const book = 'JavaScript Cookbook: Programming the Web';
document.cookie = 'author=Adam';
document.cookie = `title=${encodeURIComponent(book)}`;
console.log(document.cookie);

// cookie expires in 1 day
document.cookie = 'user=Abigail;  max-age=86400';

// delete a cookie
function eraseCookie(key) {
  const cookie = `${key}=;expires=Thu, 01 Jan 1970 00:00:00 UTC`;
  document.cookie = cookie;
}

eraseCookie('author');
console.log(document.cookie);
