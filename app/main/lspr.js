'use strict';

/**
 * Main Module Application
 */

 var lspr = angular.module("lspr", [
    'ions',
    'lspr.route',
    'ngCookies',
    'ngMessages',
    'ngAnimate',
    'ui.bootstrap',
    'ui.calendar',
    '720kb.tooltips',
    'ngFileUpload',
    'dialogs.main',
    'satellizer',
    'restangular',
    'ngTable',
    'lspr.dashboard',
    'lspr.recruitment',
    'lspr.employee',
    'lspr.attendance',
    'lspr.training',
    'lspr.performanceAppraisal',
    'lspr.talentManagement',
    'lspr.grievance',
    'lspr.medical',
    'lspr.loan',
    'lspr.payroll'
]);

lspr.config(['$locationProvider', 'dialogsProvider', '$logProvider', '$authProvider', 'RestangularProvider',
    function ($locationProvider, dialogsProvider, $logProvider, $authProvider, RestangularProvider) {

        $locationProvider.html5Mode(true).hashPrefix('!');

        $logProvider.debugEnabled(true);

        dialogsProvider.useBackdrop('static');
        dialogsProvider.useEscClose(true);

        $authProvider.loginUrl = 'http://localhost:5050/api/v1/auth/authenticate';

        RestangularProvider.addResponseInterceptor(function(data, operation, what, url, response, deferred) {
            var extractedData = {};

            if (operation === "getList") {
                extractedData = data.department;
                extractedData.status = data.status;
                extractedData.message = data.message;
            } else {
                extractedData = data.data;
            }

            return extractedData;
        });
}]);

/* Setup api routes */
lspr.factory('config', ['$rootScope', 'lsprAPI', function($rootScope, lsprAPI) {

    var apiUrl = lsprAPI.config.isSecure ? 'https://' : 'http://'
                    + lsprAPI.config.domain
                    + '/' + lsprAPI.config.prefix
                    + '/' + lsprAPI.config.apiVersion;

    var config = {
        apiUrl: apiUrl,
        layout: {
            pageSidebarClosed: false, // sidebar menu state
            pageBodySolid: false, // solid body color state
            pageAutoScrollOnLoad: 1000, // auto scroll to top on page load
            isInternal: true
        }
    };

    $rootScope.layout = config.layout;
    $rootScope.apiUrl = apiUrl;

    return config;
}]);


lspr.run(['$rootScope', '$timeout', '$window', 'lsprNav', 'config', 'Restangular', function ($rootScope, $timeout, $window, lsprNav, config, Restangular) {

    $rootScope.lsprNav = lsprNav;

    Restangular.setBaseUrl(config.apiUrl);

    $rootScope.$on('$routeChangeStart', function (e, d, p) {
        if (d.$$route && d.$$route.resolve) {
            $rootScope.loading = true;
        }
    });

    $rootScope.$on('$routeChangeSuccess', function () {
        $rootScope.loading = false;
        $timeout(function () {
            $window.scrollTo(0,0);
        }, 500);
    });

    $rootScope.$on('$routeChangeError', function (e, d, p) {
        $rootScope.loading = false;
    });
}]);
