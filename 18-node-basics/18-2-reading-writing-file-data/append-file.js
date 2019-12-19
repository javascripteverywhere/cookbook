const fs = require('fs');

const buf = "\nI'm going to add this text to a file";
fs.appendFile('main2.txt', buf, err => {
  if (err) throw err;
  console.log('appended text to file');
});
