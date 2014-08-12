'use strict';

module.exports = function(app) {

  if (app.dataSources.db.name !== 'Memory') {
    return;
  }

  console.error('Started creating inital data.');

  var User = app.models.User;
  var Role = app.models.Role;
  var RoleMapping = app.models.RoleMapping;


  User.create({
    email: 'admin@admin.com',
    firstName: 'System',
    lastName: 'Admin',
    password: 'admin'
  }, function(err, user) {

    if (err) {
      console.log('err', err);
    }
    console.log(user);

    Role.create({
      name: 'admin'
    }, function(err, role) {
      role.principals.create({
        principalType: RoleMapping.USER,
        principalId: user.id
      });
    });

  });

  User.create({
    email: 'user@user.com',
    firstName: 'App',
    lastName: 'User',
    password: 'user'
  }, function(err, user) {

    if (err) {
      console.log('err', err);
    }
    console.log(user);

    Role.create({
      name: 'admin'
    }, function(err, role) {
      role.principals.create({
        principalType: RoleMapping.USER,
        principalId: user.id
      });
    });

  });



  var Category = app.models.Category;
  var Product = app.models.Product;

  Category.create({
    name: 'General Products'
  }, function(err, category) {
    if (err) {
      console.log('err', err);
    }
    Product.create({
      name: 'Generic product',
      categoryId: category.id
    }, function(err, data) {
      console.log(data);
    });
    Product.create({
      name: 'Specific product',
      categoryId: category.id
    }, function(err, data) {
      console.log(data);
    });
  });

  var Setting = app.models.Setting;

  Setting.create({
    key: 'appName',
    value: 'Loopback-Angular-Admin'
  }, function(err, data) {
    if (err) {
      console.log('err', err);
    }
    console.log(data);
  });

};
