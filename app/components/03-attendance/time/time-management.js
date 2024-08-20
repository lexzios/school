'use strict';

/**
 * @ngdoc function
 * @name lspr.attendance.controller:TimeController
 * @description
 * # EmployeeController
 * Controller of the TimeController component
 */
lspr.attendance.controller('TimeController', TimeController);

function TimeController ($log, $scope, $rootScope, ngTableParams, $filter) {

	var vm = this;

	vm.mockupData = [
		{date: '09-08-2015', checkin:'08:00', checkout:'16:00', employeeName: 'John Doe'},
		{date: '09-08-2015', checkin:'07:04', checkout:'15:00', employeeName: 'Arthur'},
		{date: '09-08-2015', checkin:'07:15', checkout:'16:01', employeeName: 'Jane Doe'}
	];

	$log.info('Inside Time Controller');

	vm.ui = {
		tableParams: new ngTableParams(
			{
			    page: 1,
			    count: 10,
	            filter: {
	            	date: '',
	                checkin: '',
	                checkout: '',
	                employeeName: ''
	            },
	            sorting: {
	            	date: 'asc',
		            checkin: 'asc',
		            checkout: 'asc',
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

TimeController.$inject = ['$log', '$scope', '$rootScope', 'ngTableParams', '$filter'];
