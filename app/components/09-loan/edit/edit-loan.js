'use strict';

/**
 * @ngdoc function
 * @name lspr.loan.controller:EditLoanController
 * @description
 * # EditLoanController
 * Controller of the Edit Loan component
 */
lspr.loan.controller('EditLoanController', EditLoanController);

function EditLoanController ($log, $scope, $rootScope, lsprNav) {

	var vm = this;

	$log.info('Inside Edit Loan Controller');
}

EditLoanController.$inject = ['$log', '$scope', '$rootScope', 'lsprNav'];
