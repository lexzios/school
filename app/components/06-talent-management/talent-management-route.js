'use strict';

/**
 * LSPR Talent Management Route Configuration

 */

 lspr.talentManagement.config(['$routeProvider', function($routeProvider) {

 	$routeProvider
        .when(
            lsprNav.talentManagement.path, {
                templateUrl: 'components/06-talent-management/talent-management.html',
                controller: 'TalentManagementController',
                controllerAs: 'vm'
            }
        )
        .when(
            lsprNav.talentManagement.settings.path, {
                templateUrl: 'components/06-talent-management/settings/talent-management-settings.html',
                controller: 'TalentManagementSettingsController',
                controllerAs: 'vm'
            }
        );

 }]);
