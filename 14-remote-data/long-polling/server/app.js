const express = require('express');
const cors = require('cors');

const app = express();
const port = 8080;

app.use(cors());

app.get('/', (req, res) => {
  console.log('Waiting...');

  setTimeout(() => {
    console.log(`sending message`);
    res.send({ message: 'Hello!' });
  }, 3000);
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
