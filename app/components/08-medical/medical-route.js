'use strict';

/**
 * LSPR Medical Route Configuration

 */

 lspr.medical.config(['$routeProvider', function($routeProvider) {

 	$routeProvider
       .when(
           lsprNav.medical.path, {
           templateUrl: 'components/08-medical/medical.html',
           controller: 'MedicalController',
           controllerAs: 'vm'
       })
       .when(
           lsprNav.medical._action.list, {
           templateUrl: 'components/08-medical/list/medical-list.html',
           controller: 'MedicalListController',
           controllerAs: 'vm'
       })
       .when(
           lsprNav.medical._action.create, {
           templateUrl: 'components/08-medical/create/create-medical.html',
           controller: 'CreateMedicalController',
           controllerAs: 'vm'
       })
       .when(
           lsprNav.medical._action.detail, {
           templateUrl: 'components/08-medical/detail/detail-medical.html',
           controller: 'DetailMedicalController',
           controllerAs: 'vm'
       })
       .when(
           lsprNav.medical.settings.path, {
           templateUrl: 'components/08-medical/settings/medical-settings.html',
           controller: 'MedicalSettingsController',
           controllerAs: 'vm'
       })
       .when(
           lsprNav.medical.settings.groups.path, {
           templateUrl: 'components/08-medical/settings/medical-groups/medical-groups.html',
           controller: 'MedicalGroupController',
           controllerAs: 'vm'
       })
       .when(
           lsprNav.medical.settings.rules.path, {
           templateUrl: 'components/08-medical/settings/medical-rules/medical-rules.html',
           controller: 'MedicalRuleController',
           controllerAs: 'vm'
       })
       .when(
           lsprNav.medical.settings.rules._action.detail, {
           templateUrl: 'components/08-medical/settings/medical-rules/detail/detail-medical-rules.html',
           controller: 'DetailMedicalRuleController',
           controllerAs: 'vm'
       });

 }]);
