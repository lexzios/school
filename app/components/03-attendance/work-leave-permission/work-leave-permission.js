'use strict';

/**
 * @ngdoc function
 * @name lspr.attendance.controller:WorkLeavePermissionController
 * @description
 * # WorkLeavePermissionController
 * Controller of the Work Leave Permission component
 */
lspr.attendance.controller('WorkLeavePermissionController', WorkLeavePermissionController);

function WorkLeavePermissionController ($log, $scope, $rootScope, ngTableParams, $filter) {

	var vm = this;

	vm.mockupData = [
		{workLeaveId: 'AL00046', requestDate: '09-08-2015', status:'approved', employeeName: 'John Doe', reason: 'sick'},
		{workLeaveId: 'AL00047', requestDate: '10-08-2015', status:'pending', employeeName: 'John Doe', reason: 'business meeting'},
		{workLeaveId: 'AL00048', requestDate: '11-08-2015', status:'approved', employeeName: 'John Doe', reason: 'sick'},
		{workLeaveId: 'AL00049', requestDate: '12-08-2015', status:'approved', employeeName: 'John Doe', reason: 'sick'},
	];

	$log.info('Inside Work Leave Permission Controller');

	vm.ui = {
		tableParams: new ngTableParams(
			{
			    page: 1,
			    count: 10,
	            filter: {
	            	workLeaveId: '',
	                requestDate: '',
	                status: '',
	                employeeName: '',
					reason: ''
	            },
	            sorting: {
	            	workLeaveId: 'asc',
		            requestDate: 'asc',
		            status: 'asc',
		            employeeName: 'asc',
					reason: 'asc'
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

WorkLeavePermissionController.$inject = ['$log', '$scope', '$rootScope', 'ngTableParams', '$filter'];
