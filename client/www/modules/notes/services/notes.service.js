(function(window, angular, undefined) {
  'use strict';
  angular
    .module('com.module.notes')
    .service('NotesService', function($state, CoreService, Note, gettextCatalog) {

      this.getNotes = function() {
        return Note.find().$promise;
      };

      this.getNote = function(id) {
        return Note.findById({
          id: id
        }).$promise;
      };

      this.upsertNote = function(note) {
        return Note.upsert(note).$promise
          .then(function() {
            CoreService.toastSuccess(
              gettextCatalog.getString('Note saved'),
              gettextCatalog.getString('Your note is safe with us!')
            );
          })
          .catch(function(err) {
            CoreService.toastSuccess(
              gettextCatalog.getString('Error saving note '),
              gettextCatalog.getString('This note could no be saved: ') + err
            );
          });
      };

      this.deleteNote = function(id, successCb, cancelCb) {
        CoreService.confirm(
          gettextCatalog.getString('Are you sure?'),
          gettextCatalog.getString('Deleting this cannot be undone'),
          function() {
            Note.deleteById({
              id: id
            }, function() {
              CoreService.toastSuccess(
                gettextCatalog.getString('Note deleted'),
                gettextCatalog.getString('Your note is deleted!'));
              successCb();
            }, function(err) {
              CoreService.toastError(
                gettextCatalog.getString('Error deleting note'),
                gettextCatalog.getString('Your note is not deleted! ') + err);
              cancelCb();
            });
          },
          function() {
            cancelCb();
          }
        );
      };

      this.getFormFields = function() {
        return [{
          key: 'title',
          type: 'input',
          templateOptions: {
            label: gettextCatalog.getString('Title'),
            required: true
          }
        }, {
          key: 'body',
          type: 'textarea',
          templateOptions: {
            label: gettextCatalog.getString('Body'),
            required: true
          }
        }];
      };

    });

})(window, window.angular);
