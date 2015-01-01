'use strict';
angular.module ('com.module.pages')
  .controller ('PagesCtrl', [
  '$scope',
  '$state',
  '$stateParams',
  'toasty',
  'Page',
  '$filter',
  'SweetAlert',
  function ($scope, $state, $stateParams, toasty, Page, $filter, SweetAlert) {

    $scope.loading = true;

    var pageId = $stateParams.id;

    if (pageId) {
      $scope.page = Page.findById ({
        id: pageId
      }, function () {
      }, function (err) {
        console.log (err);
      });
    } else {
      $scope.page = {
        'name': 'New page',
        'content': '# Hi!\n\n## You can preview the result\n\n[Here](https://daringfireball.net/projects/markdown/basics) *are the* `markdown` **basics**!\n\n    fine code goes here \n\n- lists \n- go \n- here '
      };
    }

    function loadPages () {
      $scope.pages = Page.find (function () {
        console.log ('after find');
        $scope.loading = false;
      });
    }

    loadPages ();

    $scope.delete = function (id) {
      SweetAlert.swal ({
        title: 'Are you sure?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#DD6B55'
      }, function (isConfirm) {
        if (isConfirm) {
          Page.deleteById (id, function () {
            toasty.pop.success ({title: 'Page deleted', msg: 'Your page is deleted!', sound: false});
            loadPages ();
            $state.go ('app.pages.list');
          }, function (err) {
            toasty.pop.error ({title: 'Error deleting page', msg: 'Your page is not deleted: ' + err, sound: false});
          });
        } else {
          return false;
        }
      });
    };

    $scope.editorOptions = {
      theme: 'monokai',
      lineWrapping: true,
      lineNumbers: true,
      mode: 'markdown'
    };

    $scope.onSubmit = function () {
      var cleanName = $scope.page.name.replace (/[^a-zA-Z0-9\-\s]/g, '');
      $scope.page.slug = $filter ('slugify') (cleanName);
      Page.upsert ($scope.page, function () {
        toasty.pop.success ({title: 'Page saved', msg: 'Your page is safe with us!', sound: false});
        $state.go ('^.list');
      }, function (err) {
        console.log (err);
      });
    };

  }
]);
