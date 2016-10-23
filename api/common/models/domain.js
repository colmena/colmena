'use strict';

const faker = require('faker/locale/en')

module.exports = function(Domain) {

  Domain._templates = () => ({
    exampleCom: () => ({
      id: 'example.com',
      name: 'example.com',
    }),
  })
};
