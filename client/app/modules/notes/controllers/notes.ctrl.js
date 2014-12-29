/**
 * Created by movibe on 29/12/14.
 */
'use strict';
angular.module ('com.module.notes')
  .controller ('NotesCtrl', function ($scope, $state, $stateParams, toasty, Note, SweetAlert) {

  var noteId = $stateParams.id;

  if (noteId) {
    $scope.note = Note.findById ({
      id: noteId
    }, function () {
    }, function (err) {
      console.log (err);
    });
  } else {
    $scope.note = {};
  }

  function loadItems () {
    $scope.notes = Note.find ();
  }

  loadItems ();

  $scope.delete = function (id) {
    SweetAlert.swal ({
      title: 'Are you sure?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#DD6B55'
    }, function (isConfirm) {
      if (isConfirm) {
        Note.deleteById (id, function () {
          toasty.pop.success ({title: 'Note deleted', msg: 'Your note is deleted!', sound: false});
          loadItems ();
          $state.go ('app.notes.list');
          console.log ();
        }, function (err) {
          toasty.pop.error ({title: 'Error deleting note', msg: 'Your note is not deleted: ' + err, sound: false});
        });
      } else {
        return false;
      }
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
      type: 'text',
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
    Note.upsert ($scope.note, function () {
      toasty.pop.success ({title: 'Note saved', msg: 'Your note is safe with us!', sound: false});
      $state.go ('^.list');
    }, function (err) {
      console.log (err);
    });
  };

});
