'use strict';

/**
 * @ngdoc function
 * @name lspr.employee.controller:EmployeeLoanController
 * @description
 * # EmployeeLoanController
 * Controller of the Employee Loan component
 */
lspr.employee.controller('EmployeeLoanController', EmployeeLoanController);

function EmployeeLoanController ($log, $scope, $rootScope) {

	$log.info('Inside Employee Loan Controller');

	var vm = this;

}

EmployeeLoanController.$inject = ['$log', '$scope', '$rootScope'];
