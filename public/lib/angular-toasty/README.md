Angular Toasty
=================

**Angular Toasty** is a angularjs module that provides growl-style alerts and messages for your angular app with extensive features.

Latest release requires AngularJS v1.2.20 or higher and angular-animate for the CSS3 transformations. 

Demo: http://salakar.github.io/angular-toasty/toasty-sample/

This module is based on **AngularJS-Toaster** by Jirikavi.

```HTML
bower install angular-toasty
```

#### Current Version 0.1.8
![alt tag](http://i.imgur.com/p12dgjE.png)

#### Current Features
* onClick, onAdd, onRemove event handlers.
* show / hide close button. (showClose)
* enable / disable click to close. (clickToClose)
* success, wait, info, warning & error toast types.
* adjust timeouts.
* toast sounds (optional toggle)
* toast position. (bottom-right as default)
* toast add to top/bottom of current toasts.

#### Planned Features
* Toast shaking via css.
* Toast sizes.

I've yet to do the documentation, so please see sample app for several usage examples.

#### Example controller using Toasty:
JS:
```javascript
angular.module('main', ['ngAnimate', 'toasty'])
    .controller('myController', function($scope, toasty, $timeout, $window) {

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

    });
```
HTML:
```HTML
<div ng-controller="myController">
    <div>  
        <button class="btn btn-primary" style="margin: 150px 0 0 150px;" ng-click="pop()">Show toasts</button>
        <br /> 
        <button class="btn btn-danger" style="margin: 10px 0 0 150px;" ng-click="clear()">Clear toasts</button>                 
    </div>
</div>

<!-- Toasty controller, add this to your index page / default template --> 
<div ng-controller="toasty-controller">
	<toasty-container toasty-defaults='{"timeout": 3000, "close-button":true}'></toasty-container>        
</div>
```
