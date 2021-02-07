const express = require('express');
const passport = require('passport');
const { Strategy } = require('passport-twitter');

require('dotenv').config();

const port = process.env.PORT || '8080';

// Configure the Twitter strategy for use by Passport.
//
// OAuth 1.0-based strategies require a `verify` function which receives the
// credentials (`token` and `tokenSecret`) for accessing the Twitter API on the
// user's behalf, along with the user's profile.  The function must invoke `cb`
// with a user object, which will be set at `req.user` in route handlers after
// authentication.
passport.use(new Strategy({
    consumerKey: process.env.TWITTER_CONSUMER_KEY,
    consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
    callbackURL: '/oauth/callback'
  },
  (token, tokenSecret, profile, cb) => {
    // In this example, the user's Twitter profile is supplied as the user
    // record.  In a production-quality application, the Twitter profile should
    // be associated with a user record in the application's database, which
    // allows for account linking and authentication with other identity
    // providers.
    return cb(null, profile);
  }));


// Configure Passport authenticated session persistence.
//
// In order to restore authentication state across HTTP requests, Passport needs
// to serialize users into and deserialize users out of the session.  In a
// production-quality application, this would typically be as simple as
// supplying the user ID when serializing, and querying the user record by ID
// from the database when deserializing.  However, due to the fact that this
// example does not have a database, the complete Twitter profile is serialized
// and deserialized.
passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((obj, cb) => {
  cb(null, obj);
});


// Create a new Express application.
const app = express();

// Configure view engine to render EJS templates.
app.set('views', `${__dirname  }/views`);
app.set('view engine', 'ejs');

// configure express sessions
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));

// Initialize Passport and restore authentication state, if any, from the
// session.
app.use(passport.initialize());
app.use(passport.session());


// Define routes.
app.get('/',
  (req, res) => {
    res.render('home', { user: req.user });
  });

app.get('/login',
  (req, res) => {
    res.render('login');
  });

app.get('/login/twitter',
  passport.authenticate('twitter'));

app.get('/oauth/callback',
  passport.authenticate('twitter', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('/');
  });

app.get('/profile',
  require('connect-ensure-login').ensureLoggedIn(),
  (req, res) => {
    res.render('profile', { user: req.user });
  });

app.get('/logout',
  (req, res) => {
    req.session.destroy( () => {
      res.redirect('/');
    });
  });

app.listen(port, () => console.log(`Listening on port ${port}!`));
