'use strict';
angular
    .module ('module.subscriber')
    .config (function ($stateProvider) {
    $stateProvider
        .state ('app.subscriber', {
        abstract   : true,
        url        : '/subscriber',
        templateUrl: 'modules/subscriber/views/main.html'
    })
        .state ('app.subscriber.list', {
        url        : '',
        templateUrl: 'modules/subscriber/views/list.html',
        controller : 'SubscriberCtrl as Subscriber'
    })

});
