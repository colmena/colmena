'use strict';
angular.module('com.module.notes')
  .controller('NotesCtrl', function ($scope, $state, $stateParams, CoreService, Note) {

    var noteId = $stateParams.id;

    if (noteId) {
      $scope.note = Note.findById({
        id: noteId
      }, function () {
      }, function (err) {
        console.log(err);
      });
    } else {
      $scope.note = {};
    }

    function loadItems() {
      $scope.notes = Note.find();
    }

    loadItems();

    $scope.delete = function (id) {
      CoreService.confirm('Are you sure?', 'Deleting this cannot be undone', function () {
        Note.deleteById(id, function () {
          CoreService.toastSuccess('Note deleted', 'Your note is deleted!');
          loadItems();
          $state.go('app.notes.list');
        }, function (err) {
          CoreService.toastError('Error deleting note', 'Your note is not deleted! ' + err);
        });
      }, function () {
        return false;
      });
    };

    $scope.formFields = [
      {
        key: 'title',
        type: 'text',
        label: 'Title',
        required: true
      },
      {
        key: 'body',
        type: 'textarea',
        label: 'Body',
        required: true
      }
    ];

    $scope.formOptions = {
      uniqueFormId: true,
      hideSubmit: false,
      submitCopy: 'Save'
    };

    $scope.onSubmit = function () {
      Note.upsert($scope.note, function () {
        CoreService.toastSuccess('Note saved', 'Your note is safe with us!');
        $state.go('^.list');
      }, function (err) {
        console.log(err);
      });
    };

  });
