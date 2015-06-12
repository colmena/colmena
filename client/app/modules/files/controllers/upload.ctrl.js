'use strict';
angular
    .module ('com.module.files')
    .controller ('UploadCtrl', function ($scope, FileUploader, CoreService) {

        // create a uploader with options
        var uploader = $scope.uploader = new FileUploader ({
            scope   : $scope, // to automatically update the html. Default: $rootScope
            url     : CoreService.env.apiUrl + '/containers/files/upload',
            formData: [{
                key: 'value'
            }]
        });

        console.log ('Add filters and callbacks to the uploader object:', uploader);

        // FILTERS AND CALLBACKS

        //uploader.filters.push({
        //  name: 'customFilter',
        //  fn: function () {
        //    return this.queue.length < 10;
        //  }
        //});

        // CALLBACKS

        //uploader.onWhenAddingFileFailed = function (item /*{File|FileLikeObject}*/, filter, options) {
        //  console.info('onWhenAddingFileFailed', item, filter, options);
        //};
        //uploader.onAfterAddingFile = function (fileItem) {
        //  console.info('onAfterAddingFile', fileItem);
        //};
        //uploader.onAfterAddingAll = function (addedFileItems) {
        //  console.info('onAfterAddingAll', addedFileItems);
        //};
        //uploader.onBeforeUploadItem = function (item) {
        //  console.info('onBeforeUploadItem', item);
        //};
        //uploader.onProgressItem = function (fileItem, progress) {
        //  console.info('onProgressItem', fileItem, progress);
        //};
        //uploader.onProgressAll = function (progress) {
        //  console.info('onProgressAll', progress);
        //};
        //uploader.onSuccessItem = function (fileItem, response, status, headers) {
        //  console.info('onSuccessItem', fileItem, response, status, headers);
        //};
        //uploader.onErrorItem = function (fileItem, response, status, headers) {
        //  console.info('onErrorItem', fileItem, response, status, headers);
        //};
        //uploader.onCancelItem = function (fileItem, response, status, headers) {
        //  console.info('onCancelItem', fileItem, response, status, headers);
        //};
        //uploader.onCompleteItem = function (fileItem, response, status, headers) {
        //  console.info('onCompleteItem', fileItem, response, status, headers);
        //};
        //uploader.onCompleteAll = function () {
        //  console.info('onCompleteAll');
        //};

    });
