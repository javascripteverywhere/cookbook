
// Use a regular expression to find matches
const searchString = "Now is the time and this is the time and that is the time";
const regexSearch = /t\w*e/g;

const matches = searchString.matchAll(regexSearch);
for (const match of matches) {
  console.log(`at ${match.index} we found ${match[0]}`);
}


// Use a regular expression to replace patterns
const originalString = 'Now is the time, this is the tame';
const regexReplace = /t\w{2}e/g;
const newString = originalString.replaceAll(regexReplace, 'place');
console.log(`The regex ${regexReplace} changes "${originalString}" to "${newString}"`);
