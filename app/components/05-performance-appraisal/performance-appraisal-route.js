'use strict';

/**
 * LSPR Performance Appraisal Route Configuration

 */

 lspr.performanceAppraisal.config(['$routeProvider', function($routeProvider) {

 	$routeProvider
        .when(
            lsprNav.performanceAppraisal.path, {
                templateUrl: 'components/05-performance-appraisal/performance-appraisal.html',
                controller: 'PerformanceAppraisalController',
                controllerAs: 'vm'
            }
        )
        .when(
            lsprNav.performanceAppraisal.settings.path, {
                templateUrl: 'components/05-performance-appraisal/settings/performance-appraisal-settings.html',
                controller: 'PerformanceAppraisalSettingsController',
                controllerAs: 'vm'
            }
        ).when(
            lsprNav.performanceAppraisal.managerialAppraisal._action.create, {
                templateUrl: 'components/05-performance-appraisal/managerial-appraisal/create/create-managerial-appraisal.html',
                controller: 'CreateManagerialAppraisalController',
                controllerAs: 'vm'
            }
        ).when(
            lsprNav.performanceAppraisal.employeeAppraisal._action.create, {
                templateUrl: 'components/05-performance-appraisal/employee-appraisal/create/create-employee-appraisal.html',
                controller: 'CreateEmployeeAppraisalController',
                controllerAs: 'vm'
            }
        );

 }]);
