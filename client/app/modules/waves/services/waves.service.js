'use strict';
var app = angular.module('com.module.waves');

app.service('WavesService', ['CoreService', 'gettextCatalog', 'Wave', function (CoreService, gettextCatalog, Wave) {

  this.getWaves = function () {
    return Wave.find({
      filter: {
        order: 'created DESC'
      }
    }).$promise;
  };

  this.getWave = function (id) {
    return Wave.findById({id: id}).$promise;
  };

  this.deleteWave = function (id, cb) {
    CoreService.confirm(gettextCatalog.getString('Are you sure?'), gettextCatalog.getString('Deleting this cannot be undone'), function () {
      Wave.deleteById(id, function () {
        CoreService.toastSuccess(gettextCatalog.getString('Item deleted'), gettextCatalog.getString('Your item has been deleted!'));
        cb();
      }, function (err) {
        CoreService.toastError(gettextCatalog.getString('Oops'), gettextCatalog.getString('Error deleting item: ') + err);
        cb();
      });
    }, function () {
      return false;
    });
  };

}]);
