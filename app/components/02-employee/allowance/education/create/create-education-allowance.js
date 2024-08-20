'use strict';

/**
 * @ngdoc function
 * @name lspr.employee.controller:CreateEducationAllowanceController
 * @description
 * # CreateEducationAllowanceController
 * Controller of the Create EducationAllowance component
 */
lspr.employee.controller('CreateEducationAllowanceController', CreateEducationAllowanceController);

function CreateEducationAllowanceController ($log, $scope, $rootScope) {

	$log.info('Inside Create EducationAllowance Controller');

	var vm = this;

	vm.rows = [0];

	vm.ui = {
		addRow: function() {
    		vm.rows.push(vm.rows.length);
		},
		removeRow: function(index) {
			vm.rows.splice(index , 1);
		}
	};


}

CreateEducationAllowanceController.$inject = ['$log', '$scope', '$rootScope'];
