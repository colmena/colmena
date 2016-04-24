(function () {
    'use strict';
    angular.module('com.module.roles')
        .run(function ($rootScope, User, gettextCatalog, LoopBackAuth) {
             User.roles.exists({
                        id: LoopBackAuth.currentUserId,
                        fk: 1
                    }).$promise.then(
                        function () {
                            $rootScope.addMenu(gettextCatalog.getString('Roles'), 'app.roles.list', 'fa-file-o');
                        }
                    );
            
            // User.roles({ id: LoopBackAuth.currentUserId }).$promise.then(function (data) {
            //     $rootScope.addDashboardBox(gettextCatalog.getString('Roles'), 'bg-teal', 'ion-document-text', data.length, 'app.roles.list');
            // });

        });

})();
