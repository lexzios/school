'use strict';

IONS.http.factory('TokenFactory', TokenFactory);

function TokenFactory ($window) {

    var Token = {};

    Token.getToken = function() {
        return $window.localStorage.getItem('satellizer_token');
    };

    Token.setToken = function(token) {
        token ? $window.localStorage.setItem('satellizer_token', token) : $window.localStorage.removeItem('satellizer_token');
    }

    return Token;
};

TokenFactory.$inject = ['$window'];
