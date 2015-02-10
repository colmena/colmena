'use strict';

var app = angular.module('com.module.core');

app.factory('FormHelper', ['$state', 'CoreService', 'gettextCatalog', function ($state, CoreService, gettextCatalog) {

  return function (model) {

    console.log('This is the model', model);

    this.model = model;

    /**
     * @param {string} id: id of the item that is to be deleted.
     *
     * @description
     * Initiates a delete action. Prompts the user form confirmation
     * before actioning the delete.
     */
    this.delete = function (id) {

      CoreService.confirm(gettextCatalog.getString('Are you sure?'), gettextCatalog.getString('Deleting this cannot be undone'), function () {
        this.model.deleteById(id, function () {
          CoreService.toastSuccess(gettextCatalog.getString('Item deleted'), gettextCatalog.getString('Your item has been deleted!'));
          $state.reload();
        }, function (err) {
          CoreService.toastError(gettextCatalog.getString('Oops'), gettextCatalog.getString('Error deleting item: ') + err);
        });
      }, function () {
        return false;
      });

    };

    /**
     * @param {string} id: name of state to transition to
     *
     * @description
     * Cancel a form action. Sends the user back to the previous page they
     * were on
     */
    this.cancel = function (defaultState) {
      $state.go(defaultState);
    };

  };

}]);
