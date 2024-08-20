'use strict';

/**
 * @ngdoc function
 * @name lspr.employee.controller:EmployeeController
 * @description
 * # EmployeeController
 * Controller of the Employee component
 */
lspr.employee = angular.module('lspr.employee', []);
lspr.employee.controller('EmployeeController', EmployeeController);

function EmployeeController ($log, $scope, $rootScope) {

	var vm = this;

	$log.info('Inside Employee Controller');


}

EmployeeController.$inject = ['$log', '$scope', '$rootScope'];
