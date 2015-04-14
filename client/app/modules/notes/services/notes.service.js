'use strict';
var app = angular.module('com.module.notes');

app.service('NotesService', ['$state', 'CoreService', 'Note', 'gettextCatalog', function($state,
  CoreService, Note, gettextCatalog) {

  this.getNotes = function() {
    return Note.find();
  };

  this.getNote = function(id) {
    return Note.findById({
      id: id
    });
  };

  this.upsertNote = function(note, cb) {
    Note.upsert(note, function() {
      CoreService.toastSuccess(gettextCatalog.getString(
        'Note saved'), gettextCatalog.getString(
        'Your note is safe with us!'));
      cb();
    }, function(err) {
      CoreService.toastSuccess(gettextCatalog.getString(
        'Error saving note '), gettextCatalog.getString(
        'This note could no be saved: ') + err);
    });
  };

  this.deleteNote = function(id, cb) {
    CoreService.confirm(gettextCatalog.getString('Are you sure?'),
      gettextCatalog.getString('Deleting this cannot be undone'),
      function() {
        Note.deleteById(id, function() {
          CoreService.toastSuccess(gettextCatalog.getString(
            'Note deleted'), gettextCatalog.getString(
            'Your note is deleted!'));
          cb();
        }, function(err) {
          CoreService.toastError(gettextCatalog.getString(
            'Error deleting note'), gettextCatalog.getString(
            'Your note is not deleted! ') + err);
        });
      },
      function() {
        return false;
      });
  };

}]);
