'use strict';

/**
 * @ngdoc function
 * @name lspr.employee.controller:EmployeeSettingsController
 * @description
 * # EmployeeSettingsController
 * Controller of the Employee Settings component
 */
lspr.employee.controller('EmployeeSettingsController', EmployeeSettingsController);

function EmployeeSettingsController ($log, $scope, $rootScope) {

	var vm = this;
	vm.rows = [0];

	$log.info('Inside Employee Settings Controller');

	vm.ui =  {
		addRow: function(){
			vm.rows.push(vm.rows.length);
		},
		removeRow: function(index){
			vm.rows.splice(index, 1);
		},
	};
}

EmployeeSettingsController.$inject = ['$log', '$scope', '$rootScope'];
