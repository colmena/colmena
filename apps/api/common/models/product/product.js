'use strict'

const faker = require('faker/locale/en')

module.exports = function(Product) {
  Product._templates = () => ({
    basic: domainId => {
      const name = faker.commerce.productName()
      const sku = name.replace(/ /g, '-').toLowerCase()

      return {
        domainId,
        name,
        sku,
        description: faker.lorem.sentence(),
      }
    },
  })
}
