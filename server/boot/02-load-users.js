'use strict';

module.exports = function(app) {

  if (app.dataSources.db.name !== 'Memory' && !process.env.INITDB) {
    return;
  }

  createDefaultUsers();

  function createDefaultUsers() {

    console.log('Creating roles and users');

    var User = app.models.User;
    var Role = app.models.Role;
    var RoleMapping = app.models.RoleMapping;

    var users = [];
    var roles = [{
      name: 'admin',
      users: [{
        firstName: 'Admin',
        lastName: 'User',
        email: 'admin@admin.com',
        username: 'admin',
        password: 'admin'
      }]
    }, {
      name: 'users',
      users: [{
        firstName: 'Guest',
        lastName: 'User',
        email: 'user@user.com',
        username: 'user',
        password: 'user'
      }]
    }];

    roles.forEach(function(role) {
      Role.create({
        name: role.name
      }, function(err, createdRole) {
        role.users.forEach(function(roleUser) {
          User.create(roleUser, function(err, createdUser) {
            if (err) console.log('error creating roleUser',
              err);
            createdRole.principals.create({
              principalType: RoleMapping.USER,
              principalId: createdUser.id
            }, function(err, rolePrincipal) {
              if (err) console.log(
                'error creating rolePrincipal', err);
              users.push(createdUser);
            });

          });
        });
      });
    });
    return users;
  }

};
