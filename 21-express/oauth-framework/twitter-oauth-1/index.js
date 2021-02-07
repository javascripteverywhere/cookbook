const express = require('express');
const TwitterAPI = require('node-twitter-api');

require('dotenv').config();

const port = process.env.PORT || '8080';

// keys and callback URL are configured in the Twitter Dev Center
const twitter = new TwitterAPI({
  consumerKey: process.env.TWITTER_CONSUMER_KEY,
  consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
  callback: 'http://127.0.0.1:8080/oauth/callback'
});

// object for storing retrieved token values
const tokenValues = {};

// simple HTML template
const menu =
  '<a href="/post/status/">Say hello</a><br />' +
  '<a href="/get/account/">Account Settings<br />';

// Create a new Express application.
const app = express();

// request Twitter permissions when the / route is visited
app.get('/', (req, res) => {
  twitter.getRequestToken((error, requestToken, requestTokenSecret) => {
    if (error) {
      console.log(`Error getting OAuth request token : ${error}`);
      res.writeHead(200);
      res.end(`Error getting authorization${error}`);
    } else {
      tokenValues.token = requestToken;
      tokenValues.tokensec = requestTokenSecret;
      res.writeHead(302, {
        Location: `https://api.twitter.com/oauth/authenticate?oauth_token=${requestToken}`
      });
      res.end();
    }
  });
});

// callback url as specified in the Twitter Developer Center
app.get('/oauth/callback', (req, res) => {
  twitter.getAccessToken(
    tokenValues.token,
    tokenValues.tokensec,
    req.query.oauth_verifier,
    (err, accessToken, accessTokenSecret) => {
      res.writeHead(200);
      if (err) {
        res.end(`problems getting authorization with Twitter${err}`);
      } else {
        tokenValues.atoken = accessToken;
        tokenValues.atokensec = accessTokenSecret;
        res.end(menu);
      }
    }
  );
});

// post a status update from an authenticated and authorized users
app.get('/post/status/', (req, res) => {
  twitter.statuses(
    'update',
    {
      status: 'Ignore teaching OAuth with Node'
    },
    tokenValues.atoken,
    tokenValues.atokensec,
    (err, data) => {
      res.writeHead(200);
      if (err) {
        res.end(`problems posting ${JSON.stringify(err)}`);
      } else {
        res.end(`posting status: ${JSON.stringify(data)}<br />${menu}`);
      }
    }
  );
});

// get account details for an authenticated and authorized user
app.get('/get/account/', (req, res) => {
  twitter.account(
    'settings',
    {},
    tokenValues.atoken,
    tokenValues.atokensec,
    (err, data) => {
      res.writeHead(200);
      if (err) {
        res.end(`problems getting account ${JSON.stringify(err)}`);
      } else {
        res.end(`<p>${JSON.stringify(data)}</p>${menu}`);
      }
    }
  );
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
