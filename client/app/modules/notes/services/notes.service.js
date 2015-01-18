'use strict';
var app = angular.module('com.module.notes');

app.service('NotesService', ['$state', 'CoreService', 'Note', function ($state, CoreService, Note) {

  this.getNotes = function () {
    return Note.find();
  };

  this.getNote = function (id) {
    return Note.findById({
      id: id
    });
  };

  this.upsertNote = function (note, cb) {
    Note.upsert(note, function () {
      CoreService.toastSuccess('Note saved', 'Your note is safe with us!');
      cb();
    }, function (err) {
      CoreService.toastSuccess('Error saving note ', 'This note could no be saved: ' + err);
    });
  };

  this.deleteNote = function (id, cb) {
    CoreService.confirm('Are you sure?', 'Deleting this cannot be undone', function () {
      Note.deleteById(id, function () {
        CoreService.toastSuccess('Note deleted', 'Your note is deleted!');
        cb();
      }, function (err) {
        CoreService.toastError('Error deleting note', 'Your note is not deleted! ' + err);
      });
    }, function () {
      return false;
    });
  };

}]);
