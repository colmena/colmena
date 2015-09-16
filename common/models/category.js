module.exports = function(Category) {

  Category.observe('before delete', function(ctx, next) {

    var Product = ctx.Model.app.models.Product;
    Product.find({
      where: {
        categoryId: ctx.where.id
      }
    }, function(err, products) {
      products.forEach(function(product) {
        Product.destroyById(product.id);
      });
    });
    next();
  });

};
