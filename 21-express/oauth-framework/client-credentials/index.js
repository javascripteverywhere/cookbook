const OAuth = require('oauth');
const fetch = require('node-fetch');
const { promisify } = require('util');

// read Twitter keys from a .env file
require('dotenv').config();

// Twitter's search API endpoint and the query we'll be searching
const endpointUrl = 'https://api.twitter.com/2/tweets/search/recent';
const query = 'javascript';

async function getTweets() {
  // consumer key and secret passed in from environment variables
  const oauth2 = new OAuth.OAuth2(
    process.env.TWITTER_CONSUMER_KEY,
    process.env.TWITTER_CONSUMER_SECRET,
    'https://api.twitter.com/',
    null,
    'oauth2/token',
    null
  );

  // retrieve the credentials from Twitter
  const getOAuthAccessToken = promisify(
    oauth2.getOAuthAccessToken.bind(oauth2)
  );
  const token = await getOAuthAccessToken('', {
    grant_type: 'client_credentials'
  });

  // make the request for data with the retrieved token
  const res = await fetch(`${endpointUrl}?query=${query}`, {
    headers: {
      authorization: `Bearer ${token}`
    }
  });

  const json = await res.json();
  return json;
}

(async () => {
  try {
    // Make request
    const response = await getTweets();
    console.log(response);
  } catch (e) {
    console.log(e);
    process.exit(-1);
  }
  process.exit();
})();
