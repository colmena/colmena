'use strict';

const faker = require('faker/locale/en')

module.exports = function(Post) {

  Post._templates = () => ({
    basic: domainId => ({
      domainId,
      authorId: faker.random.arrayElement([ 1, 2, 3, 4, 5 ]),
      title: faker.lorem.sentence(),
      content: faker.lorem.paragraphs(5),
      image: faker.image.technics(),
    }),
  })

};
