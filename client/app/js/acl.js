angular
  .module('app.acl', ['permission'])
  .run(function (PermissionStore, LoopBackAuth, User, $q) {
    // using permissionstore instead of rolestore - not working - due to
    // the possible conflict between the Role resource in the permission module
    // and the Role resource in lbServices module
    // Define admin role
    PermissionStore
      .definePermission('admin', function (stateParams) {
        var deferred = $q.defer();

        User.roles.exists({
          id: LoopBackAuth.currentUserId,
          fk: 1
        }).$promise.then(
          //success callback
          function () {
            deferred.resolve();
          },
          //error callback
          function () {
            deferred.reject();
          }
          );

        return deferred.promise;
      });
    // Define user role
    PermissionStore
      .definePermission('user', function (stateParams) {
        var deferred = $q.defer();

        User.roles.exists({
          id: LoopBackAuth.currentUserId,
          fk: 2
        }).$promise.then(
          //success callback
          function () {
            deferred.resolve();
          },
          //error callback
          function () {
            deferred.reject();
          }
          );

        return deferred.promise;
      });
  });
