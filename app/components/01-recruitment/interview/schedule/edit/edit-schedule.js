'use strict';

/**
 * @ngdoc function
 * @name lspr.recruitment.controller:EditScheduleController
 * @description
 * # EditScheduleController
 * Controller of the EditSchedule component
 */
lspr.recruitment.controller('EditScheduleController', EditScheduleController);

function EditScheduleController ($log, $scope, $rootScope) {

	var vm = this;

	$log.info('Inside EditSchedule Controller');

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

EditScheduleController.$inject = ['$log', '$scope', '$rootScope'];
