'use strict'

module.exports = function (Category) {

  Category.observe('before delete', (ctx, next) => {

    const Product = ctx.Model.app.models.Product

    Product.find({
      where: {
        categoryId: ctx.where.id,
      },
    }, (err, products) => {
      if (err) {
        next(err)
      }
      products.forEach((product) => Product.destroyById(product.id))
    })
    next()
  })

}
