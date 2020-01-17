const fetch = require('node-fetch');
require('dotenv').config();

const id = process.env.APP_ID;

(async () => {
  try {
    const moneyAPI1 = await fetch(
      `https://openexchangerates.org/api/latest.json?app_id=${id}`
    );
    const moneyAPI2 = await fetch(
      `http://openexchangerates.org/api/currencies.json?app_id=${id}`
    );

    const latest = await moneyAPI1.json();
    const names = await moneyAPI2.json();
    const keys = Object.keys(latest.rates);

    keys.forEach((value, index) => {
      const rate = latest.rates[keys[index]];
      const name = names[keys[index]];
      console.log(`${name} ${rate}`);
    });
  } catch (error) {
    console.log(error);
  }
})();
