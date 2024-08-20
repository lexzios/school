'use strict';

/**
 * @ngdoc function
 * @name lspr.employee.controller:ExitChecklistController
 * @description
 * # EmployeeController
 * Controller of the Employee Exit Checklist component
 */
lspr.employee.controller('ExitChecklistController', ExitChecklistController);

function ExitChecklistController ($log, $scope, $rootScope) {

	var vm = this;

	$log.info('Inside Employee Exit Checklist Controller');


}

ExitChecklistController.$inject = ['$log', '$scope', '$rootScope'];
