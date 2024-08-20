'use strict';

IONS.http.factory('HTTPInterceptor', HTTPInterceptor);

function HTTPInterceptor ($q, TokenFactory, $location) {

    var Interceptor = {};

    var _http = null;

    Interceptor.request = function(config) {

        var token = TokenFactory.getToken();

        if(token) {
            config.headers.Authorization = 'Bearer ' + token;
        }

        if(!config.headers['Authorization']) {
            $location.path('/');
        }

        return config || $q.when(config)
    };

    Interceptor.responseError = function(response) {

        if (response.status === 401 || response.status === 403) {
               $location.path('/');
         }

        return $q.reject(response);
    }

    return Interceptor;
}

HTTPInterceptor.$inject = ['$q', 'TokenFactory', '$location'];
