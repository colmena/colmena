'use strict';

module.exports = function(app) {

  if (app.dataSources.db.name !== 'Memory') { return; }

  console.error('Started creating inital data.');

  var User = app.models.User;
  var Role = app.models.Role;
  var RoleMapping = app.models.RoleMapping;


  User.create({
    email: 'admin@admin.com',
    firstName: 'System',
    lastName: 'Admin',
    password: 'admin'
  }, function (err, user) {

    if(err) { console.log('err', err); }

     Role.create({name: 'admin'}, function (err, role) {
       role.principals.create({principalType: RoleMapping.USER, principalId: user.id});
     });

  });

  User.create({
    email: 'user@user.com',
    firstName: 'App',
    lastName: 'User',
    password: 'user'
  }, function (err, user) {

    if(err) { console.log('err', err); }

     Role.create({name: 'admin'}, function (err, role) {
       role.principals.create({principalType: RoleMapping.USER, principalId: user.id});
     });

  });


};
