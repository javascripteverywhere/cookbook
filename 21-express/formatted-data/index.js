const express = require('express');
const builder = require('xmlbuilder');

const app = express();
const port = process.env.PORT || '3000';

const xml = builder
  .create('resources')
  .ele('resource')
  .ele('title', 'Ecma-262 Edition 10')
  .up()
  .ele('url', 'https://www.ecma-international.org/ecma-262/10.0/index.html')
  .up()
  .end({ pretty: true });

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/xml');
  res.end(xml.toString(), 'utf8');
});

app.listen(port, () => console.log(`Listening on port ${port}`));
