'use strict';

lspr.factory('LoginService', LoginService);

function LoginService($http){

    var city = 'data/cities.json';
    var specialities = 'data/specialist.json';
    var doctor = 'data/search-result.json';

    var LoginService = {

        getCities: function() {
            return $http({method: 'GET', url: city})
        },

        getSpecialities: function() {
            return $http({method: 'GET', url: specialities})
        },

        getDoctors: function() {
            return $http({method: 'GET', url: doctor})
        }
    }

    return LoginService;
}

