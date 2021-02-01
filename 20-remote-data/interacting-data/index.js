const fetch = require('node-fetch');

// full HTML
fetch('https://oreilly.com')
  .then(res => res.text())
  .then(body => console.log(body));

// JSON
fetch('https://swapi.co/api/people/1')
  .then(res => res.json())
  .then(json => console.log(json));

// async/await
(async () => {
  try {
    const response = await fetch('https://swapi.co/api/people/3');
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
})();
