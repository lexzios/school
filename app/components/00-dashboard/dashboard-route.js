'use strict';

/**
 * LSPR Dashboard Route Configuration

 */

 lspr.dashboard.config(['$routeProvider', function($routeProvider) {

 	$routeProvider
    .when(
        lsprNav.dashboard.path, {
        templateUrl: 'components/00-dashboard/dashboard.html',
        controller: 'DashboardController',
        controllerAs: 'vm'
    })
    .when(
        lsprNav.dashboard.settings.path, {
        templateUrl: 'components/00-dashboard/settings/settings.html',
        controller: 'SettingsController',
        controllerAs: 'vm'
    })
    .when(
        lsprNav.dashboard.settingsJobPosition.path, {
        templateUrl: 'components/00-dashboard/settings/settings-job-position.html',
        controller: 'SettingsJobPositionController',
        controllerAs: 'vm'
    });

 }]);
