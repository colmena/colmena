'use strict';
angular
    .module ('module.products')
    .controller ('ProductsCtrl', function ($scope, $state, $stateParams, CoreService, gettextCatalog, Product, Category) {
    var self       = this;
    var productId  = $stateParams.id;
    var categoryId = $stateParams.categoryId;

    if (productId) {
        self.product = Product.findById ({
            id: productId
        }, function (product) {
            product.category = Product.category ({
                id: product.id
            });
        }, function (err) {
            console.log (err);
        });
    } else {
        self.product = {};
    }

    if (categoryId) {
        self.product.categoryId = categoryId;
    }

    function loadItems () {
        self.categories = [];
        Category
            .find ({
            filter: {
                include: 'products'
            }
        })
            .$promise
            .then (function (resp) {
            self.data = resp;
        });
    }

    loadItems ();

    self.delete = function (id) {
        CoreService
            .confirm (gettextCatalog.getString ('Are you sure?'), gettextCatalog.getString ('Deleting this cannot be undone'),
            function () {
                Product
                    .deleteById (id)
                    .$promise
                    .then (function () {
                    CoreService.toastSuccess (gettextCatalog.getString ('Product deleted'), gettextCatalog.getString ('Your product is deleted!'));
                    loadItems ();
                    $state.go ('app.products.list');
                })
                    .catch (function (err) {
                    CoreService.toastError (gettextCatalog.getString ('Error deleting product'), gettextCatalog.getString ('Your product is not deleted: ') + err);
                });
            },
            function () {
                return false;
            });
    };

    self.deletecategory = function (id) {
        Category.deleteById (id, function () {
            CoreService.toastSuccess (gettextCatalog.getString ('Category deleted'), gettextCatalog.getString ('Your category is deleted!'));
            loadItems ();
        }, function (err) {
            CoreService.toastError (gettextCatalog.getString ('Error deleting category'), gettextCatalog.getString ('Your category is not deleted: ') + err);
        });


    };

    self.formFields = [{
        key     : 'name',
        type    : 'text',
        label   : gettextCatalog.getString ('Name'),
        required: true
    }, {
        key     : 'categoryId',
        type    : 'text',
        label   : gettextCatalog.getString ('Category'),
        required: true
    }, {
        key  : 'description',
        type : 'text',
        label: gettextCatalog.getString ('Description')
    }, {
        key  : 'percentage',
        type : 'text',
        label: gettextCatalog.getString ('Percentage')
    }, {
        key  : 'price',
        type : 'text',
        label: gettextCatalog.getString ('Price')
    }];

    self.formOptions = {
        uniqueFormId: true,
        hideSubmit  : false,
        submitCopy  : gettextCatalog.getString ('Save')
    };

    self.onSubmit = function () {
        Product
            .upsert (self.product)
            .$promise
            .then (function () {
            CoreService.toastSuccess (gettextCatalog.getString ('Product saved'), gettextCatalog.getString ('Your product is safe with us!'));
            $state.go ('^.list');
        });
    };

});
