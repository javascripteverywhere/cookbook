const express = require('express');

const app = express();
const port = process.env.PORT || '3000';

// respond with 'Hello World' at the root path
app.get('/', (req, res) => res.send('Hello World'));

// middleware for static files
// will serve static files from the 'files' directory
app.use(express.static('files'));

// use Pug as a templating engine
app.set('view engine', 'pug');

// respond with the template
app.get('/template', (req, res) => {
  res.render('template');
});

app.listen(port, () => console.log(`Listening on port ${port}`));
