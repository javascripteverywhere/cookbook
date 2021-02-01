const greeting = {
  hello: val => {
    return console.log(`Hello ${val}`);
  },
  ciao: val => {
    return console.log(`Ciao ${val}`);
  }
};

module.exports = greeting;
