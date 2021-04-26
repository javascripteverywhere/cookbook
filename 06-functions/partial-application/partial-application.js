function makeString(prefix, str, suffix) {
  return prefix + str + suffix;
}

function quoteString(str) {
  return makeString('"', str, '"');
}

function barString(str) {
  return makeString('-', str, '-');
}

function namedEntity(str) {
  return makeString('&#', str, ';');
}

console.log(quoteString('apple')); // "apple"
console.log(barString('apple'));   // -apple-
console.log(namedEntity(169));     // "&#169; (the copyright symbol in HTML)


// A function for all-purpose partializing of any other function
function partial(fn, ...argsToApply) {
  return function(...restArgsToApply) {
    return fn(...argsToApply, ...restArgsToApply);
  }
}

// The function you want to partialize
function raiseToPower(exponent, number) {
  return number**exponent;
}

// Using partial(), make a customized function
const cubeIt = partial(raiseToPower, 3);

// Calculate the cube of 9 (9**3)
console.log(cubeIt(9));  // 729