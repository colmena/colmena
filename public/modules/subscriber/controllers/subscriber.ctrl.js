'use strict';
angular
    .module ('module.subscriber')
    .controller ('SubscriberCtrl', function ($rootScope, Weather) {
    var self = this;

    self.currentUser = $rootScope.currentUser;

    self.getWeather = getWeather;

    self.temperatureSymbol = temperatureSymbol (self.currentUser);

    self.weatherData = null;

    self.getWeather ();

    function getWeather () {

        if (self.currentUser && self.currentUser.preferences) {
            Weather
                .getWeather (self.currentUser)
                .then (function (weatherData) {
                console.log (weatherData);
                    self.weatherData = weatherData.weather[0];
                });
        }
    }

    function temperatureSymbol (currentUser) {
        if (!currentUser || !currentUser.preferences) {
            return 'F';
        }
        var temperature = currentUser.preferences.temperature || 'imperial';
        return temperature && temperature === 'imperial' ? "F" : "C";
    }

});