'use strict';

module.exports = function(Note) {

  Note.createFakeData = function(faker) {
    return Note.create({
      title: faker.lorem.sentence(),
      body: faker.lorem.paragraph()
    });
  }

};
