'use strict';

/**
 * LSPR Loan Route Configuration

 */

 lspr.loan.config(['$routeProvider', function($routeProvider) {

 	$routeProvider
        .when(
            lsprNav.loan.path, {
            templateUrl: 'components/09-loan/loan.html',
            controller: 'LoanController',
            controllerAs: 'vm'
        })
        .when(
            lsprNav.loan._action.list, {
            templateUrl: 'components/09-loan/list/loan-list.html',
            controller: 'LoanListController',
            controllerAs: 'vm'
        })
        .when(
            lsprNav.loan._action.create, {
            templateUrl: 'components/09-loan/create/create-loan.html',
            controller: 'CreateLoanController',
            controllerAs: 'vm'
        })
        .when(
            lsprNav.loan._action.edit, {
            templateUrl: 'components/09-loan/edit/edit-loan.html',
            controller: 'EditLoanController',
            controllerAs: 'vm'
        })
        .when(
            lsprNav.loan._action.detail, {
            templateUrl: 'components/09-loan/detail/detail-loan.html',
            controller: 'DetailLoanController',
            controllerAs: 'vm'
        })
        .when(
            lsprNav.loan._action.paymentDetail, {
            templateUrl: 'components/09-loan/payment-detail/payment-detail-loan.html',
            controller: 'PaymentDetailLoanController',
            controllerAs: 'vm'
        })
        .when(
            lsprNav.loan.settings.path, {
                templateUrl: 'components/09-loan/settings/loan-settings.html',
                controller: 'LoanSettingsController',
                controllerAs: 'vm'
            }
        )

 }]);
