module.exports = function(Subscriber) {

    // Google Maps API has a rate limit of 10 requests per second
    // Seems we need to enforce a lower rate to prevent errors
    var lookupGeo = require('function-rate-limit')(5, 1000, function() {
        var geoService = Subscriber.app.dataSources.geo;
        geoService.geocode.apply(geoService, arguments);
    });


    Subscriber.beforeRemote('prototype.updateAttributes', function(ctx, user, next) {
        var body = ctx.req.body;
        console.log('beforeRemote -- prototype.updateAttributes');
        if (body                    &&
                body.preferences        &&
                body.preferences.street &&
                body.preferences.city   &&
                body.preferences.zipcode ) {

            var loc = body.preferences;

            // geo code the address
            lookupGeo(loc.street, loc.city, loc.zipcode,
                    function(err, result) {
                        if (result && result[0]) {
                            body.geo = result[0];
                            next();
                        } else {
                            //TODO: Need to find out how to handle this with better a UX experience
                            next(new Error('could not find location'));
                        }
                    });

        } else {
            next();
        }

    });


    Subscriber.getWeather = function(subscriberId, cb){
        Subscriber.findById(subscriberId, function (err, instance) {

            if (err) {
                return cb(err);
            }

            if (instance && instance.preferences) {
                var lat = instance.geo.lat;
                var lon = instance.geo.lng;
                var units = instance.preferences.temperature;

                var openWeatherMap = Subscriber.app.dataSources.openweathermap;
                openWeatherMap.getweather
                (
                        lat,
                        lon,
                        units,
                        function(err, results){

                            if (err) {
                                cb(err);
                            } else {
                                //console.log(results);
                                cb(null, results);
                            }

                        }
                );

            } else {
                cb(null, {});
            }

        })
    };


    Subscriber.remoteMethod('getWeather', {
        accepts: [
            {arg: 'id', type: 'string', required: true}
        ],
        http: {path: '/:id/weather', verb: 'get'},
        returns: {arg: 'weather', type: 'object'}
    });

};