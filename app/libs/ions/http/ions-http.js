'use strict';

IONS.http = angular.module('ions.http', ['ions.http']);

IONS.http.config(['$httpProvider', function($httpProvider) {
    // $httpProvider.interceptors.push('HTTPInterceptor');
}]);
