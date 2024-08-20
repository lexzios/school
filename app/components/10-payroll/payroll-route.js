'use strict';

/**
 * LSPR Payroll Route Configuration

 */

 lspr.payroll.config(['$routeProvider', function($routeProvider) {

 	$routeProvider
        .when(
            lsprNav.payroll.path, {
                templateUrl: 'components/10-payroll/payroll.html',
                controller: 'PayrollController',
                controllerAs: 'vm'
            }
        )
        .when(
            lsprNav.payroll._action.create, {
                templateUrl: 'components/10-payroll/create/create-payroll.html',
                controller: 'CreatePayrollController',
                controllerAs: 'vm'
            }
        )
        .when(
            lsprNav.payroll._action.list, {
                templateUrl: 'components/10-payroll/list/payroll-list.html',
                controller: 'PayrollListController',
                controllerAs: 'vm'
            }
        )
        .when(
            lsprNav.payroll._action.detail, {
                templateUrl: 'components/10-payroll/detail/detail-payroll.html',
                controller: 'PayrollListController',
                controllerAs: 'vm'
            }
        )
        .when(
            lsprNav.payroll.settings.path, {
                templateUrl: 'components/10-payroll/settings/payroll-settings.html',
                controller: 'PayrollSettingsController',
                controllerAs: 'vm'
            }
        )
        .when(
            lsprNav.payroll.settings.allowanceClassification.path, {
                templateUrl: 'components/10-payroll/settings/allowance/allowance-classification.html',
                controller: 'AllowanceClassificationController',
                controllerAs: 'vm'
            }
        )
 }]);
