'use strict';

/**
 * @ngdoc function
 * @name lspr.employee.controller:EmployeeAllowanceController
 * @description
 * # EmployeeAllowanceController
 * Controller of the Employee Allowance component
 */
lspr.employee.controller('EmployeeAllowanceController', EmployeeAllowanceController);

function EmployeeAllowanceController ($log, $scope, $rootScope) {

	$log.info('Inside Employee Allowance Controller');

	var vm = this;

}

EmployeeAllowanceController.$inject = ['$log', '$scope', '$rootScope'];
