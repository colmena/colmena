'use strict';

const faker = require('faker/locale/en')

module.exports = function(Event) {

  Event._templates = () => ({
    basic: domainId => {
      const address = faker.address
      const lorem = faker.lorem

      return {
        domainId,
        name: lorem.sentence(),
        description: lorem.paragraphs(5),
        date: faker.date.between('2016-01-01', '2019-01-01'),
        location: `${address.streetAddress()}, ${address.city()}, ${address.stateAbbr()}`,
      }
    },
  })

};
