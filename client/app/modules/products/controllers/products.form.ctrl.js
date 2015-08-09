'use strict';
var app = angular.module('com.module.products');

function ProductsFormCtrl($state, CoreService, Product, gettextCatalog,
                          categories, product) {

  var self = this;

  this.product = product;

  this.schema = {
    type: 'object',
    title: 'Product',
    properties: {
      name: {
        title: gettextCatalog.getString('Name'),
        type: 'string'
      },
      categoryId: {
        title: gettextCatalog.getString('Category'),
        type: 'number',
        format: 'uiselect',
        items: categories.map(function(category) {
          return {
            value: category.id,
            label: category.name
          };
        }),
        placeholder: 'Select category'
      },
      description: {
        title: gettextCatalog.getString('Description'),
        type: 'string'
      },
      price: {
        title: gettextCatalog.getString('Price'),
        type: 'string'
      }
    },
    required: ['name', 'categoryId']
  };

  this.form = [
    'name',
    'categoryId',
    'description',
    'price',
    {
      type: 'submit',
      title: 'OK'
    }
  ];

  this.onSubmit = function() {

    Product.upsert(self.product, function() {
      CoreService.toastSuccess(gettextCatalog.getString(
        'Product saved'), gettextCatalog.getString(
        'Your product is safe with us!'));
      $state.go('^.list');
    }, function(err) {
      console.log(err);
    });
  };
}

app.controller('ProductsFormCtrl', ProductsFormCtrl);
