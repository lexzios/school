'use strict';

/**
 * @ngdoc function
 * @name lspr.employee.controller:EmployeePayrollController
 * @description
 * # EmployeePayrollController
 * Controller of the Employee Payroll component
 */
lspr.employee.controller('EmployeePayrollController', EmployeePayrollController);

function EmployeePayrollController ($log, $scope, $rootScope) {

	$log.info('Inside Employee Payroll Controller');

	var vm = this;

}

EmployeePayrollController.$inject = ['$log', '$scope', '$rootScope'];
