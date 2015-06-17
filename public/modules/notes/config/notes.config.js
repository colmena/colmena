'use strict';
angular
    .module ('module.notes')
    .run (function ($rootScope, Note, gettextCatalog) {
    $rootScope.addMenu (gettextCatalog.getString ('Notes'), 'app.notes.list', 'fa-file-o');

    Note.find (function (data) {
        $rootScope.addDashboardBox (gettextCatalog.getString ('Notes'), 'bg-green', 'ion-clipboard', data.length, 'app.notes.list');
    });

});
