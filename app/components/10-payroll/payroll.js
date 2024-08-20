'use strict';

/**
 * @ngdoc function
 * @name lspr.payroll.controller:PayrollController
 * @description
 * # PayrollController
 * Controller of the Payroll component
 */
lspr.payroll = angular.module('lspr.payroll', ['ngTable']) ;
lspr.payroll.controller('PayrollController', PayrollController);

function PayrollController ($log, $scope, $rootScope, lsprNav) {

	$log.info('Inside Payroll Controller');

	var vm = this;
}

PayrollController.$inject = ['$log', '$scope', '$rootScope', 'lsprNav'];
