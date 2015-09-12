(function(window, angular, undefined) {
  'use strict';
  angular
    .module('com.module.files')
    .service('FileService', function($http, CoreService, Setting, gettextCatalog) {

      this.find = function() {
        return $http.get(CoreService.env.apiUrl + '/containers/files/files').success(function(res) {
          return res.data;
        });
      };

      this.delete = function(id, successCb, cancelCb) {
        CoreService.confirm(
          gettextCatalog.getString('Are you sure?'),
          gettextCatalog.getString('Deleting this cannot be undone'),
          function() {
            $http.delete(CoreService.env.apiUrl +
              '/containers/files/files/' + encodeURIComponent(id)).success(
              function() {
                CoreService.toastSuccess(
                  gettextCatalog.getString('File deleted'),
                  gettextCatalog.getString('Your file is deleted!')
                );
                successCb();
              });
          },
          function(err) {
            CoreService.toastError(
              gettextCatalog.getString('Error deleting file'),
              gettextCatalog.getString('Your file is not deleted! ') + err);
            cancelCb();
          });
      };

    });
})(window, window.angular);
