'use strict';

/**
 * @ngdoc function
 * @name lspr.loan.controller:LoanController
 * @description
 * # LoanController
 * Controller of the Loan component
 */
lspr.loan = angular.module('lspr.loan', []) ;
lspr.loan.controller('LoanController', LoanController);

function LoanController ($log, $scope, $rootScope, lsprNav) {

	var vm = this;

	$log.info('Inside Loan Controller');
}

LoanController.$inject = ['$log', '$scope', '$rootScope', 'lsprNav'];
