'use strict';

/**
 * @ngdoc function
 * @name lspr.recruitment.controller:CreateScheduleController
 * @description
 * # CreateScheduleController
 * Controller of the CreateSchedule component
 */
lspr.recruitment.controller('CreateScheduleController', CreateScheduleController);

function CreateScheduleController ($log, $scope, $rootScope) {

	var vm = this;

	$log.info('Inside CreateSchedule Controller');

	vm.rows = [0];
	vm.ui = {
		addRow: function(){
			vm.rows.push(vm.rows.length);
		},
		removeRow: function(index){
			vm.rows.splice(index, 1);
		}
	};
}

CreateScheduleController.$inject = ['$log', '$scope', '$rootScope'];
