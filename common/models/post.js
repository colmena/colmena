'use strict'

module.exports = function (Post) {

  Post.createFakeData = function (faker) {
    return Post.create({
      title: faker.lorem.sentence(),
      content: faker.lorem.paragraph(),
      image: `${faker.image.imageUrl()}/nature/${(Math.random() * 9 | 0)}`,
    })
  }

}
