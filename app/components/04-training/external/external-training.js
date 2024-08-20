'use strict';

/**
 * @ngdoc function
 * @name lspr.training.controller:ExternalTrainingController
 * @description
 * Controller of the external Training component
 */
lspr.training.controller('ExternalTrainingController', ExternalTrainingController);

function ExternalTrainingController ($log, $scope, $rootScope, ngTableParams, $filter) {

	var vm = this;

	vm.mockupData = [
		{externalTrainingId: 'TRI00051', trainingDate: '09-08-2015', participant:'5'},
		{externalTrainingId: 'TRI00052', trainingDate: '10-08-2015', participant:'10'},
		{externalTrainingId: 'TRI00053', trainingDate: '11-08-2015', participant:'10'},
	];

	$log.info('Inside External Training Controller');

	vm.ui = {
		tableParams: new ngTableParams(
			{
			    page: 1,
			    count: 10,
	            filter: {
	            	externalTrainingId: '',
	                trainingDate: '',
	                participant: ''
	            },
	            sorting: {
	            	externalTrainingId: 'asc',
		            trainingDate: 'asc',
		            participant: 'asc'
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

ExternalTrainingController.$inject = ['$log', '$scope', '$rootScope', 'ngTableParams', '$filter'];
