'use strict'

module.exports = function (Event) {

  Event.createFakeData = function (faker) {
    return Event.create({
      name: faker.lorem.sentence(),
      description: faker.lorem.paragraph(),
      startDate: faker.date.future(),
      endDate: faker.date.future(),
      image: `${faker.image.imageUrl()}/nightlife/${(Math.random() * 9 | 0)}`
    })
  }

}
