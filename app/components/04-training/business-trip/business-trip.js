'use strict';

/**
 * @ngdoc function
 * @name lspr.training.controller:BusinessTripController
 * @description
 * # BusinessTripController
 * Controller of the Business Trip component
 */
lspr.training.controller('BusinessTripController', BusinessTripController);

function BusinessTripController ($log, $scope, $rootScope, ngTableParams, $filter) {

	var vm = this;

	vm.mockupData = [
		{businessTripId: 'BT001', requestDate: '18-09-2015', startDate:'09-09-2015', endDate: '11-09-2015', employeeName: 'John Doe'},
		{businessTripId: 'BT004', requestDate: '17-09-2015', startDate:'10-09-2015', endDate: '11-09-2015', employeeName: 'John Doe'},
		{businessTripId: 'BT006', requestDate: '17-09-2015', startDate:'20-09-2015', endDate: '21-09-2015', employeeName: 'John Doe'}
	];

	$log.info('Inside Business Trip Controller');

	vm.ui = {
		tableParams: new ngTableParams(
			{
			    page: 1,
			    count: 10,
	            filter: {
	            	businessTripId: '',
	                requestDate: '',
	                startDate: '',
	                endDate: '',
					employeeName: ''
	            },
	            sorting: {
	            	businessTripId: 'asc',
		            requestDate: 'asc',
		            startDate: 'asc',
		            endDate: 'asc',
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

BusinessTripController.$inject = ['$log', '$scope', '$rootScope', 'ngTableParams', '$filter'];
