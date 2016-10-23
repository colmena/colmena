'use strict';

const faker = require('faker/locale/en')

module.exports = function(Author) {

  Author._templates = () => ({
    basic: domainId => {
      const firstName = faker.name.firstName()
      const lastName = faker.name.lastName()
      const email = `${firstName}.${lastName}@example.com`.toLowerCase()

      return {
        domainId,
        firstName,
        lastName,
        username: email,
        email,
      }
    },
  })

};
