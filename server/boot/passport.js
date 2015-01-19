'use strict';

module.exports = function (app) {

  var bodyParser = require('body-parser');
  var loopback = require('loopback');

  // to support JSON-encoded bodies
  app.use(bodyParser.json());
  // to support URL-encoded bodies
  app.use(bodyParser.urlencoded({
    extended: true
  }));

  //// The access token is only available after boot
  app.use(app.loopback.token({
    model: app.models.accessToken
  }));

  app.use(loopback.cookieParser(app.get('cookieSecret')));
  app.use(loopback.session({
    secret: app.get('cookieSecret'),
    saveUninitialized: true,
    resave: true
  }));

  var config = false;
  try {
    config = require('../../providers.json');
  } catch (err) {
    console.error('Please configure your passport strategy in `providers.json`.');
    console.error('Copy `providers.json.template` to `providers.json` and replace the clientID/clientSecret values with your own.');
  }


  if (config) {
    console.log('Configuring passport');

    var AuthProvider = app.models.AuthProvider;
    var loopbackPassport = require('loopback-component-passport');
    var PassportConfigurator = loopbackPassport.PassportConfigurator;
    var passportConfigurator = new PassportConfigurator(app);


    // Initialize passport
    passportConfigurator.init();

    // Set up related models
    passportConfigurator.setupModels({
      userModel: app.models.user,
      userIdentityModel: app.models.userIdentity,
      userCredentialModel: app.models.userCredential
    });

    // Configure passport strategies for third party auth providers and add them to the API
    for (var s in config) {
      var c = config[s];

      if (c.provider != 'local') {

        var providerClass = c.provider;
        if (c.provider === 'google') {
          var providerClass = 'google-plus';
        }

        var entry = {
          name: s,
          link: c.link,
          authPath: c.authPath,
          provider: c.provider,
          class: providerClass
        };

        AuthProvider.create(entry, function (err, data) {
          if (err) {
            console.log(err);
          }
        });

        c.session = c.session !== false;
        passportConfigurator.configureProvider(s, c);
      }

    }

  }

  var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;

  app.get('/auth/account', ensureLoggedIn('/'), function(req, res, next) {
    console.log('Logged in', req.user)
    res.redirect('/#/app');
  });

  app.get('/auth/current', function(req, res, next) {
    if (!req.isAuthenticated || !req.isAuthenticated()) {
      return res.status(200).json({});
    }
    //poor man's copy
    var ret = JSON.parse(JSON.stringify(req.user));
    delete ret.password;
    res.status(200).json(ret);
  });

  app.get('/auth/logout', function (req, res, next) {
    req.logout();
    res.redirect('/');
  });


}
;
