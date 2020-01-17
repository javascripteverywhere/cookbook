const fetch = require('node-fetch');
const got = require('got');

(async () => {
  try {
    const response = await fetch('https://swapi.co/api/people/xx1');
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
})();

(async () => {
  try {
    const response = await got('https://swapi.co/api/people/xx2');
    console.log(JSON.parse(response.body));
  } catch (error) {
    console.log(error.response.body);
  }
})();
