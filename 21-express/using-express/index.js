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

// uncomment to see examples with EJS:
// app.set('view engine', 'ejs');

// respond with the template
app.get('/template', (req, res) => {
  res.render('template');
});

// a user object of data to send to the template
const userData = {
  name: 'Adam',
  email: 'adam@jseverywhere.io',
  avatar: 'https://s.gravatar.com/avatar/33aab819d1ffa11fc4b31a4eebaf0c5a?s=80'
};

// render the template with user data
app.get('/user', (req, res) => {
  res.render('user', { userData });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
