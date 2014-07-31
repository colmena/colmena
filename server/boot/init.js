

module.exports = function(app) {

  if (app.dataSources.db.name !== 'Memory') return;

  console.error('Started creating inital data.');

  var User = app.models.User;


  User.create({
    email: 'admin@admin.com',   // required by default
    password: 'admin'        // required by default
  }, function (err, user) {

    console.log('err', err);
    console.log('user', user);

  });



};
