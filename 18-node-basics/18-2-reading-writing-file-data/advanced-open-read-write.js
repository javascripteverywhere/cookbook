// TODO: This is a ES6+ translation of the code in E2
// consider using promises to simplify
const fs = require('fs');

fs.open('newfile.txt', 'a+', (err, fd) => {
  if (err) {
    throw err;
  } else {
    const buf = Buffer.from('The first string');
    fs.write(fd, buf, 0, buf.length, 0, (errWrite, written) => {
      if (errWrite) {
        throw errWrite;
      } else {
        const buf2 = Buffer.from('The second string');
        fs.write(fd, buf2, 0, buf2.length, 0, (errWrite2, written2) => {
          if (errWrite2) {
            throw errWrite2;
          } else {
            const length = written + written2;
            const buf3 = Buffer.alloc(length);
            fs.read(fd, buf3, 0, length, 0, errRead => {
              if (errRead) {
                throw errRead;
              } else {
                console.log(buf3.toString());
              }
            });
          }
        });
      }
    });
  }
});
