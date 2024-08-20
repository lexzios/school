'use strict';

/**
 * @ngdoc function
 * @name lspr.training.controller:InternalTrainingController
 * @description
 * Controller of the Internal Training component
 */
lspr.training.controller('InternalTrainingController', InternalTrainingController);

function InternalTrainingController ($log, $scope, $rootScope, ngTableParams, $filter) {

	var vm = this;

	vm.mockupData = [
		{internalTrainingId: 'TRI00051', trainingDate: '09-08-2015', participant:'5'},
		{internalTrainingId: 'TRI00052', trainingDate: '10-08-2015', participant:'10'},
		{internalTrainingId: 'TRI00053', trainingDate: '11-08-2015', participant:'10'},
	];

	$log.info('Inside Internal Training Controller');

	vm.ui = {
		tableParams: new ngTableParams(
			{
			    page: 1,
			    count: 10,
	            filter: {
	            	internalTrainingId: '',
	                trainingDate: '',
	                participant: ''
	            },
	            sorting: {
	            	internalTrainingId: 'asc',
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

InternalTrainingController.$inject = ['$log', '$scope', '$rootScope', 'ngTableParams', '$filter'];
