'use strict';
angular
    .module ('module.pages')
    .config (function ($stateProvider) {
        $stateProvider.state ('app.pages', {
            abstract   : true,
            url        : '/pages',
            templateUrl: 'modules/pages/views/main.html'
        })
            .state ('app.pages.list', {
                url        : '',
                templateUrl: 'modules/pages/views/list.html',
                controller : 'PagesCtrl'
            })
            .state ('app.pages.add', {
                url        : '/add',
                templateUrl: 'modules/pages/views/form.html',
                controller : 'PagesCtrl'
            })
            .state ('app.pages.edit', {
                url        : '/:id/edit',
                templateUrl: 'modules/pages/views/form.html',
                controller : 'PagesCtrl'
            })
            .state ('app.pages.view', {
                url        : '/:id',
                templateUrl: 'modules/pages/views/view.html',
                controller : 'PagesCtrl'
            });
    });
