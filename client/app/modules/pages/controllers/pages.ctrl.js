'use strict';
angular
    .module ('com.module.pages')
    .controller ('PagesCtrl', function ($scope, $state, $stateParams, $filter,
        CoreService, gettextCatalog, Page) {

        $scope.loading = true;

        var pageId = $stateParams.id;

        if (pageId) {
            $scope.page = Page.findById ({
                id: pageId
            }, function () {}, function (err) {
                console.log (err);
            });
        } else {
            $scope.page = {
                'name'   : gettextCatalog.getString ('New page'),
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
            CoreService.confirm (gettextCatalog.getString ('Are you sure?'),
                gettextCatalog.getString ('Deleting this cannot be undone'),
                function () {
                    Page.deleteById (id, function () {
                        CoreService.toastSuccess (gettextCatalog.getString (
                            'Page deleted'), gettextCatalog.getString (
                            'Your page is deleted!'));
                        loadPages ();
                        $state.go ('app.pages.list');
                    }, function (err) {
                        CoreService.toastError (gettextCatalog.getString (
                            'Error deleting page'), gettextCatalog.getString (
                                'Your page is not deleted: ') + err);
                    });
                },
                function () {
                    return false;
                });
        };

        $scope.editorOptions = {
            theme       : 'monokai',
            lineWrapping: true,
            lineNumbers : true,
            mode        : 'markdown'
        };

        $scope.onSubmit = function () {
            var cleanName    = $scope.page.name.replace (/[^a-zA-Z0-9\-\s]/g, '');
            $scope.page.slug = $filter ('slugify') (cleanName);
            Page.upsert ($scope.page, function () {
                CoreService.toastSuccess (gettextCatalog.getString ('Page saved'),
                    gettextCatalog.getString ('Your page is safe with us!'));
                $state.go ('^.list');
            }, function (err) {
                console.log (err);
            });
        };

    });
