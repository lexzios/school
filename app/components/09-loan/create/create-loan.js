'use strict';

/**
 * @ngdoc function
 * @name lspr.loan.controller:CreateLoanController
 * @description
 * # CreateLoanController
 * Controller of the Create Loan component
 */
lspr.loan.controller('CreateLoanController', CreateLoanController);

function CreateLoanController ($log, $scope, $rootScope, lsprNav) {

	var vm = this;

	$log.info('Inside Create Loan Controller');
}

CreateLoanController.$inject = ['$log', '$scope', '$rootScope', 'lsprNav'];
