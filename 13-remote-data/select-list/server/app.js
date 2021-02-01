const express = require('express');
const formidable = require('formidable');
const cors = require('cors');

const app = express();
const port = 8080;

app.use(cors());

app.get('/', (req, res) =>
  res.send('Example server for receiving JS POST requests')
);

app.post('/select', (req, res) => {
  const form = formidable();

  form.parse(req, (err, fields) => {
    if (err) {
      return;
    }
    if (fields.niceThing === 'critters') {
      res.send(['puppies', 'kittens', 'guinea pigs']);
    } else if (fields.niceThing === 'sweets') {
      res.send(['licorice', 'cake', 'cookies', 'custard']);
    } else if (fields.niceThing === 'birds') {
      res.send(['robin', 'mockingbird', 'finch', 'dove']);
    } else if (fields.niceThing === 'flowers') {
      res.send(['roses', 'lilys', 'daffodils', 'pansies']);
    } else {
      res.send(['No Nice Things  Found']);
    }
  });
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
