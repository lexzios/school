'use strict';

/**
 * @ngdoc function
 * @name lspr.PerformanceAppraisal.controller:PerformanceAppraisalSettingsController
 * @description
 * # PerformanceAppraisalSettingsController
 * Controller of the PerformanceAppraisal Settings component
 */
lspr.performanceAppraisal.controller('PerformanceAppraisalSettingsController', PerformanceAppraisalSettingsController);

function PerformanceAppraisalSettingsController ($log, $scope, $rootScope) {

	var vm = this;
	vm.managerialRows = [0];
	vm.employeeRows = [0];

	$log.info('Inside PerformanceAppraisal Settings Controller');

	vm.ui =  {
		tab: {
			jobDescription: false
		},
		addRow: function(arr){
			arr.push(arr.length);
		},
		removeRow: function(arr, index){
			arr.splice(index, 1);
		},
	};

}

PerformanceAppraisalSettingsController.$inject = ['$log', '$scope', '$rootScope'];
