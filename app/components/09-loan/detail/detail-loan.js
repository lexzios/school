'use strict';

/**
 * @ngdoc function
 * @name lspr.loan.controller:DetailLoanController
 * @description
 * # DetailLoanController
 * Controller of the Detail Loan component
 */
lspr.loan.controller('DetailLoanController', DetailLoanController);

function DetailLoanController ($log, $scope, $rootScope, lsprNav) {

	var vm = this;

	$log.info('Inside Detail Loan Controller');
}

DetailLoanController.$inject = ['$log', '$scope', '$rootScope', 'lsprNav'];
