const searchString = 'infinitely';
const fullText = 'I know not where I was born, save that the castle was' +
 ' infinitely old and infinitely horrible.';

 // Search for substring
if (fullText.includes(searchString)) {
  console.log('The search string was found');
}

// Search, but skip ahead to character position 70
if (fullText.includes(searchString, 70)) {
  // Still true, because the search skips the first 'infinitely' and
  // hits the second one.
  console.log('The search string was found');
}

// Replace some text
const changedStory = fullText.replaceAll('infinitely', 'somewhat');
console.log(changedStory);

// Use replacements to escape HTML entities
const originalPieceOfHtml = '<p>This is a <span>paragraph</span></p>';
const safePieceOfHtml = originalPieceOfHtml.replaceAll('<', '&lt;').replaceAll('>', '&gt;');
console.log(`When escaped, ${originalPieceOfHtml} becomes ${safePieceOfHtml}`);


