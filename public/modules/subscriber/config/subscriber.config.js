'use strict';
angular
    .module ('module.subscriber')
    .run (function ($rootScope, gettextCatalog) {
    $rootScope.addMenu (gettextCatalog.getString ('Subscriber'), 'app.subscriber.list', 'fa-cog');
});
