(function () {
  'use strict';
  angular.module('com.module.users')
    .run(function ($rootScope, User, gettextCatalog, LoopBackAuth) {
             User.roles.exists({
                        id: LoopBackAuth.currentUserId,
                        fk: 1
                    }).$promise.then(
                        function () {
                             $rootScope.addMenu(gettextCatalog.getString('Users'), 'app.users.list', 'fa-user');
                        }
                    );
    });

})();
