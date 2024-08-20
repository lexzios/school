'use strict';

/**
 * @ngdoc function
 * @name lspr.training.controller:TrainingRequisitionController
 * @description
 * # TrainingRequisitionController
 * Controller of the RecruitmentTraining component
 */
lspr.training.controller('TrainingRequisitionController', TrainingRequisitionController);

function TrainingRequisitionController ($log, $scope, $rootScope, ngTableParams, $filter) {

	var vm = this;

	vm.mockupData = [
		{requisitionId: 'RE00401', requisitionDate: '09-08-2015', employeeName: 'John Doe'},
		{requisitionId: 'RE00401', requisitionDate: '09-08-2015', employeeName: 'John Doe'},
		{requisitionId: 'RE00401', requisitionDate: '09-08-2015', employeeName: 'John Doe'},
	];

	$log.info('Inside Training Requisition Controller');

	vm.ui = {
		tableParams: new ngTableParams(
			{
			    page: 1,
			    count: 10,
	            filter: {
	            	requisitionId: '',
	                requisitionDate: '',
	                employeeName: ''
	            },
	            sorting: {
	            	requisitionId: 'asc',
		            requisitionDate: 'asc',
		            employeeName: 'asc'
		        }
			},
			{
			    total: vm.mockupData.length, // length of data
			    getData: function ($defer, params) {

	                 var filteredData = params.filter() ? $filter('filter')(vm.mockupData, params.filter()) : vm.mockupData;
	                 var sortedData = params.sorting() ? $filter('orderBy')(filteredData, params.orderBy()) : filteredData;

	                 vm.data = sortedData.slice((params.page() - 1) * params.count(), params.page() * params.count());

	                 params.total(sortedData.length);
	                 $defer.resolve(vm.data);
			    }
			}
		)
	}
}

TrainingRequisitionController.$inject = ['$log', '$scope', '$rootScope', 'ngTableParams', '$filter'];
