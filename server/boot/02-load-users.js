'use strict'

// to enable these logs set `DEBUG=boot:02-load-users` or `DEBUG=boot:*`
const log = require('debug')('boot:02-load-users')

module.exports = function (app) {

  if (app.dataSources.db.name !== 'Memory' && !process.env.INITDB) {
    return
  }

  createDefaultUsers()

  function createDefaultUsers () {

    log('Creating roles and users')

    const User = app.models.User
    const Role = app.models.Role
    const RoleMapping = app.models.RoleMapping

    const users = []
    const roles = [{
      name: 'admin',
      users: [{
        firstName: 'Admin',
        lastName: 'User',
        email: 'admin@admin.com',
        username: 'admin',
        password: 'admin',
      }],
    }, {
      name: 'users',
      users: [{
        firstName: 'Guest',
        lastName: 'User',
        email: 'user@user.com',
        username: 'user',
        password: 'user',
      }],
    }]

    roles.forEach((role) => {
      Role.findOrCreate(
        {where: {name: role.name}}, // find
        {name: role.name}, // create
        (err, createdRole, created) => {
          if (err) {
            console.error(`error running findOrCreate(${role.name})`, err)
          }
          (created) ? log('created role', createdRole.name)
                    : log('found role', createdRole.name)
          role.users.forEach((roleUser) => {
            User.findOrCreate(
              {where: {username: roleUser.username}}, // find
              roleUser, // create
              (err, createdUser, created) => {
                if (err) {
                  console.error('error creating roleUser', err)
                }
                (created) ? log('created user', createdUser.username)
                          : log('found user', createdUser.username)
                createdRole.principals.create({
                  principalType: RoleMapping.USER,
                  principalId: createdUser.id,
                }, (err, rolePrincipal) => {
                  if (err) {
                    console.error('error creating rolePrincipal', err)
                  }
                  users.push(createdUser)
                })
              })
          })
        })
    })
    return users
  }

}
