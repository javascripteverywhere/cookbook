const express = require('express');

const app = express();
const port = process.env.PORT || '3000';

// respond with at different route paths
app.get('/', (req, res) => res.send('Hello World'));
app.get('/users', (req, res) => res.send('Hello users'));

// parameters
app.get('/users/:userId', (req, res) => {
  res.send(`Hello user ${req.params.userId}`);
});

// regex - limit noteId parameter to 6 digit integer
app.get('^/users/:userId/notes/:noteId([0-9]{6})', (req, res) => {
  res.send(`This is note ${req.params.noteId}`);
});

// pure regex - will match anything ending in "day"
app.get(/.*day$/, (req, res) => {
  res.send(`Every day feels like ${req.path}`);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
