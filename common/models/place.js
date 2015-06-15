'use strict';
module.exports = function (Place) {

    /**
     // Endereço do tomador
     'address': {

    // Código do pais com três letras
    'country': 'BRA',

      // CEP do endereço (opcional para tomadores no exterior)
      'postalCode': '70073901',

      // Logradouro
      'street': 'Outros Quadra 1 Bloco G Lote 32',

      // Número (opcional)
      'number': 'S/N',

      // Complemento (opcional)
      'additionalInformation': 'QUADRA 01 BLOCO G',

      // Bairro
      'district': 'Asa Sul',

      // Cidade é opcional para tomadores no exterior
      'city': {
      // Código do IBGE para a Cidade
      'code': '5300108',
        // Nome da Cidade
        'name': 'Brasilia'
    },

    // Sigla do estado (opcional para tomadores no exterior)
    'state': 'DF'

    */

    var crypto = require ('crypto');

    // Google Maps API has a rate limit of 10 requests per second
    // Seems we need to enforce a lower rate to prevent errors
    var lookupGeo = require ('function-rate-limit') (5, 1000, function () {
        var geoService = Place.app.dataSources.google;
        geoService.geocode.apply (geoService, arguments);
    });


    Place.beforeCreate = function (next, place) {
        // GERAR TOKEN
        var token   = crypto.randomBytes (12).toString ('hex');
        console.log (token);
        place.token = token;
        next ();

    };

    Place.beforeSave = function (next, loc) {

        if (loc.geo) return next ();

        // geo code the address
        lookupGeo (loc.street, loc.city, loc.state,
            function (err, result) {
                if (result && result[0]) {
                    loc.geo = result[0].lng + ',' + result[0].lat;
                    next ();
                } else {
                    //next (new Error ('could not find location'));
                    console.log ('could not find location');
                    next ();
                }
            });
    };

    // Busca CEP
    var findZipcode = require ('function-rate-limit') (5, 1000, function () {
        var cepService = Place.app.dataSources.google;
        cepService.zipcode.apply (cepService, arguments);
    });

    Place.cep = function (cep, fn) {
        findZipcode (cep, fn);
    };

    // Busca Endereço
    var buscaGeoEndereco = require ('function-rate-limit') (5, 1000, function () {
        var enderecoService = Place.app.dataSources.google;
        enderecoService.geocode.apply (enderecoService, arguments);
    });

    Place.buscaEndereco = function (street, city, zipcode, fn) {
        console.log (street, city, zipcode);
        buscaGeoEndereco (street, city, zipcode, fn);
    };

    // Busca por Google Palces
    var buscaGooglePlace = require ('function-rate-limit') (5, 1000, function () {
        var googlePlaceService = Place.app.dataSources.google;
        googlePlaceService.places.apply (googlePlaceService, arguments);
    });

    Place.googlePlaces = function (location, name, types, radius, fn) {
        buscaGooglePlace (location, name, types, radius, fn);
    };


    // Busca empresas próximas
    Place.nearby = function (here, page, max, fn) {

        var location  = here.split (',');
        var herearray = new Array ();
        var newhere;

        herearray[0] = location[1];
        herearray[1] = location[0];

        newhere = herearray.join (',');

        //here default is lng,lat
        //newhere change to lat, lng
        // console.log(here);
        // console.log(newhere);

        if (typeof page === 'function') {
            fn   = page;
            page = 0;
            max  = 0;
        }

        if (typeof max === 'function') {
            fn  = max;
            max = 0;
        }

        var limit = 10;
        page      = page || 0;
        max       = Number (max || 100000);

        Place.find ({
            // find locations near the provided GeoPoint
            where: {geo: {near: newhere, maxDistance: max}},
            // paging
            skip : limit * page,
            limit: limit
        }, fn);
    };

    Place.setup = function () {
        Place.base.setup.apply (this, arguments);

        // Buscar Geopoint Endereço
        this.remoteMethod ('buscaGeoEndereco', {
            description: 'Geolocalização no Google Maps',
            accepts    : [
                {
                    arg        : 'street',
                    type       : 'string',
                    required   : true,
                    description: 'Digite o endereço com número'
                },
                {
                    arg        : 'city',
                    type       : 'string',
                    required   : true,
                    description: 'Digite o nome da Cidade'
                },
                {
                    arg        : 'zipcode',
                    type       : 'string',
                    required   : false,
                    description: 'Digite o nome do Estado'
                }
            ],
            returns    : {
                arg : 'endereco',
                root: true
            },
            http       : {
                verb   : 'GET',
                isArray: true
            }
        });

        // Busca por CEP
        this.remoteMethod ('cep', {
            description: 'Pesquisa de CEP',
            accepts    : [
                {
                    arg        : 'cep',
                    type       : 'string',
                    required   : true,
                    description: 'Digite o CEP, somente números'
                }
            ],
            returns    : {
                arg : 'endereco',
                root: true
            },
            http       : {
                verb   : 'GET',
                isArray: true
            }
        });

        // Busca por Places mais próximas
        this.remoteMethod ('googlePlaces', {
            description: 'Find nearby convites around the geo point',
            accepts    : [
                {
                    arg        : 'location',
                    type       : 'string',
                    required   : true,
                    description: 'Geo location (lng & lat)'
                },
                {
                    arg        : 'name',
                    type       : 'string',
                    description: 'Filtrar por nome'
                },
                {
                    arg        : 'types',
                    type       : 'string',
                    description: 'Tipo de empresa'
                },
                {
                    arg        : 'radius',
                    type       : 'Number',
                    description: 'Distancia da Pesquisa'
                }
            ],
            returns    : {
                arg : 'places',
                root: true
            },
            http       : {
                verb   : 'GET',
                isArray: true
            }
        });

        // Busca por Places mais próximas
        this.remoteMethod ('nearby', {
            description: 'Find nearby convites around the geo point',
            accepts    : [
                {
                    arg        : 'here',
                    type       : 'GeoPoint',
                    required   : true,
                    description: 'geo location (lng & lat)'
                },
                {
                    arg        : 'page',
                    type       : 'Number',
                    description: 'number of pages (page size=10)'
                },
                {
                    arg        : 'max',
                    type       : 'Number',
                    description: 'max distance in miles'
                }
            ],
            returns    : {
                arg : 'convites',
                root: true
            },
            http       : {
                verb   : 'GET',
                isArray: true
            }
        });
    };

    Place.setup ();
};
