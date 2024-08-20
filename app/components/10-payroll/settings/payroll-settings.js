'use strict';

/**
 * @ngdoc function
 * @name lspr.payroll.controller:PayrollSettingsController
 * @description
 * # PayrollSettingsController
 * Controller of the PayrollSettings component
 */
lspr.payroll.controller('PayrollSettingsController', PayrollSettingsController);

function PayrollSettingsController ($log, $scope, $rootScope, lsprNav) {

	var vm = this;

	$log.info('Inside PayrollSettings Controller');
}

PayrollSettingsController.$inject = ['$log', '$scope', '$rootScope', 'lsprNav'];
