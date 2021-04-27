// Function used in a template literal example
function getDaysSince(date) {
  const today = new Date();
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  return Math.round(Math.abs((today - date) / oneDay));
}

// Strings with escape sequences
const favoriteMovie = 'My favorite movie is \'The Seventh Seal\'.';
console.log(favoriteMovie);

const copyrightNotice = 'This page \u00A9 Shelley Powers.';
console.log(copyrightNotice);

// Strings with emojis
const hamburger = '🍔';
console.log(`🍔 length: ${hamburger.length}`);
const hamburgerStory = `I like hamburgers like ${hamburger} and ${String.fromCodePoint(0x1F354)}`;
console.log(hamburgerStory);

// Template literals
const firstName = 'Annie';
const lastName = 'Harker';
const hireDate = new Date('2020', 5, 22);
const employeeDetail = `Our team includes ${firstName} ${lastName}. They've been a team member since ${hireDate}! That's ${getDaysSince(hireDate)} days.`;
console.log(employeeDetail);