'use strict';
angular
    .module ('module.notes')
    .config (function ($stateProvider) {
        $stateProvider.state ('app.notes', {
            abstract   : true,
            url        : '/notes',
            templateUrl: 'modules/notes/views/main.html'
        }).state ('app.notes.list', {
            url        : '',
            templateUrl: 'modules/notes/views/list.html',
            controller : 'NotesCtrl'
        }).state ('app.notes.add', {
            url        : '/add',
            templateUrl: 'modules/notes/views/form.html',
            controller : 'NotesCtrl'
        }).state ('app.notes.edit', {
            url        : '/:id/edit',
            templateUrl: 'modules/notes/views/form.html',
            controller : 'NotesCtrl'
        }).state ('app.notes.view', {
            url        : '/:id',
            templateUrl: 'modules/notes/views/view.html',
            controller : 'NotesCtrl'
        });
    });
