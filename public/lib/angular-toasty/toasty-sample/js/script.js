angular.module('main', ['ngAnimate', 'toasty'])
.controller('myController', ['$scope', 'toasty', '$timeout', '$window', function($scope, toasty, $timeout, $window) {

    // Create a toasty with sound disabled
    $scope.silent = function() {
        toasty.pop.success({
            title: 'Your comment has been successfully added!',
            sound: false,
            showClose: false,
            clickToClose: false,
            timeout: 1500
        });
    };

    $scope.pop = function() {
        toasty.pop.success({
            title: "Success!",
            msg: 'Click to change me.',
            timeout: 0,
            showClose: false,
            myData: 'Testing 1 2 3', // Strings, integers, objects etc.
            onClick: function(toasty) {
                toasty.title = 'Well done!';
                toasty.msg = 'Closing in 5 seconds.';
                toasty.timeout = 5000;
                //console.log(toasty.myData);
                //toasty.remove();
                //toasty.removeAll();
            },
                onAdd: function(toasty) {
                console.log(toasty.id + ' has been added!');
            },
                onRemove: function(toasty) {
                console.log(toasty.id + ' has been removed!');
            }
        });

        toasty.pop.warning({
            title: 'Warning!',
            msg: 'Click to close me.',
            showClose: false,
            clickToClose: true,
            timeout: 0,
        });

        toasty.pop.wait({
            title: 'Please Wait',
            msg: 'I\'ll change after 5 seconds.',
            timeout: 0,
            clickToClose: false,
            showClose: false,
            onAdd: function(toasty) {
                var doSuccess = function() {
                    toasty.title = 'Success';
                    toasty.msg = 'Loading finished!';
                    toasty.setType('success');
                    toasty.showClose = true;
                }
                $timeout(doSuccess, 5000);
            },
        });

        toasty.pop.error({
            title: 'Error!',
            msg: 'Click the remove icon to get rid of me.',
            timeout: 0,
            showClose: true,
            clickToClose: false,
        });

        toasty.pop.info({
            title: 'Info',
            msg: 'I\'ll just stay here forever.',
            timeout: 0,
            showClose: false,
            clickToClose: false,
        });
    };

    // Remove all toasties
    $scope.clear = function() {
        toasty.clear()
    };

}]);