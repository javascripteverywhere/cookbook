const a = "hello";
const b = "HELLO";

if (a.toLowerCase() === b.toLowerCase()) {
  // We end up here, because the lowercase versions of both strings match
  console.log(`${a} is the same as ${b} in our comparison`);
}


// A more robust approach that advoids accent edge cases
// (see http://www.i18nguy.com/unicode/turkish-i18n.html)

if (a.localeCompare(b, undefined, { sensitivity: 'accent' }) === 0) {
  // We end up here, because the case-insensitive strings match.
  console.log(`${a} is the same as ${b} in our comparison`);
}