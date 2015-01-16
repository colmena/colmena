'use strict';

var loopback = require('loopback');
var boot = require('loopback-boot');
var path = require('path');
var app = module.exports = loopback();
var argv = require('minimist')(process.argv.slice(2));

/*
 * body-parser is a piece of express middleware that
 *   reads a form's input and stores it as a javascript
 *   object accessible through `req.body`
 *
 */
var bodyParser = require('body-parser');

// Passport configurators..
var loopbackPassport = require('loopback-component-passport');

var PassportConfigurator = loopbackPassport.PassportConfigurator;
var passportConfigurator = new PassportConfigurator(app);

//app.use(function(req, res, next) {
//  res.setHeader('X-Powered-By', 'Loopback Admin');
//  res.removeHeader('Vary');
//  next();
//});

// Set up the /favicon.ico
app.use(loopback.favicon());

// request pre-processing middleware
app.use(loopback.compress());

// -- Add your pre-processing middleware here --

var ds = loopback.createDataSource({
    connector: require('loopback-component-storage'),
    provider: 'filesystem',
    root: path.join(__dirname, '../', 'storage')
});
var container = ds.createModel('container');

app.model(container);

// boot scripts mount components like REST API
boot(app, __dirname);

// to support JSON-encoded bodies
app.use(bodyParser.json());
// to support URL-encoded bodies
app.use(bodyParser.urlencoded({
  extended: true
}));

// The access token is only available after boot
app.use(loopback.token({
  model: app.models.accessToken
}));

// Enable http session
//app.use(loopback.cookieParser(app.get('cookieSecret')));
app.use(loopback.session({
  secret: 'kitty',
  saveUninitialized: true,
  resave: true
}));

// Load the provider configurations
var config = {};
try {
  config = require('../providers.json');
} catch(err) {
  console.error('Please configure your passport strategy in `providers.json`.');
  console.error('Copy `providers.json.template` to `providers.json` and replace the clientID/clientSecret values with your own.');
  process.exit(1);
}
// Initialize passport
passportConfigurator.init();

// Set up related models
passportConfigurator.setupModels({
  userModel: app.models.user,
  userIdentityModel: app.models.userIdentity,
  userCredentialModel: app.models.userCredential
});
// Configure passport strategies for third party auth providers
for(var s in config) {
  var c = config[s];
  c.session = c.session !== false;
  passportConfigurator.configureProvider(s, c);
}


var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;

app.get('/auth/account', ensureLoggedIn('/login.html'), function (req, res, next) {
  res.render('pages/loginProfiles', {
    user: req.user,
    url: req.url
  });
});

app.get('/link/account', ensureLoggedIn('/login.html'), function (req, res, next) {
  res.render('pages/linkedAccounts', {
    user: req.user,
    url: req.url
  });
});

app.get('/auth/logout', function (req, res, next) {
  req.logout();
  res.redirect('/');
});

// -- Mount static files here--
// All static middleware should be registered at the end, as all requests
// passing the static middleware are hitting the file system
// Example:
//app.use(loopback.static(path.resolve(__dirname, '../client/app')));

var dist = false;

var Static = null;

if (argv['dist'] === true) {
  Static = path.resolve(__dirname, '../dist/');
}
else {
  Static = path.resolve(__dirname, '../client/app');
}

console.log("Static", Static);
app.use(loopback.static(Static));

// Requests that get this far won't be handled
// by any middleware. Convert them into a 404 error
// that will be handled later down the chain.
app.use(loopback.urlNotFound());

// The ultimate error handler.
app.use(loopback.errorHandler());

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    console.log('Web server listening at: %s', app.get('url'));
  });
};

// start the server if `$ node server.js`
if (require.main === module) {
  app.start();
}
