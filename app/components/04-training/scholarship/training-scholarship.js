'use strict';

/**
 * @ngdoc function
 * @name lspr.training.controller:TrainingScholarshipController
 * @description
 * # TrainingScholarshipController
 * Controller of the Training Scholarship component
 */
lspr.training.controller('TrainingScholarshipController', TrainingScholarshipController);

function TrainingScholarshipController ($log, $scope, $rootScope, ngTableParams, $filter) {

	var vm = this;

	vm.mockupData = [
		{scholarshipId: 'TSC00052', requestDate: '09-08-2015', amount:'5.000.000 IDR'},
		{scholarshipId: 'TSC00053', requestDate: '10-08-2015', amount:'7.000.000 IDR'},
		{scholarshipId: 'TSC00054', requestDate: '11-08-2015', amount:'11.000.000 IDR'},
	];

	$log.info('Inside Training Scholarship Controller');

	vm.ui = {
		tableParams: new ngTableParams(
			{
			    page: 1,
			    count: 10,
	            filter: {
	            	scholarshipId: '',
	                requestDate: '',
	                amount: ''
	            },
	            sorting: {
	            	scholarshipId: 'asc',
		            requestDate: 'asc',
		            amount: 'asc'
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

TrainingScholarshipController.$inject = ['$log', '$scope', '$rootScope', 'ngTableParams', '$filter'];
