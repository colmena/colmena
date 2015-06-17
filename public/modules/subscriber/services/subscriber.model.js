'use strict';
angular
    .module ('module.subscriber')
    .factory ('Weather', function (Subscriber, $http, $q) {

        function getWeather (subscriber) {
            return Subscriber
                .getWeather ({
                id: subscriber.id
            })
                .$promise;
        }

        return {
            getWeather: getWeather
        }

    }
);