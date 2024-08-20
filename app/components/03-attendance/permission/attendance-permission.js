'use strict';

/**
 * @ngdoc function
 * @name lspr.attendance.controller:AttendancePermissionController
 * @description
 * # AttendancePermissionController
 * Controller of the Attendance Permission component
 */
lspr.attendance.controller('AttendancePermissionController', AttendancePermissionController);

function AttendancePermissionController ($log, $scope, $rootScope, ngTableParams, $filter) {

	var vm = this;

	vm.mockupData = [
		{permissionId: 'AL00046', requestDate: '09-08-2015', status:'new', employeeName: 'John Doe', leaveDays: '5'},
		{permissionId: 'AL00047', requestDate: '09-08-2015', status:'new', employeeName: 'John Doe', leaveDays: '7'},
		{permissionId: 'AL00048', requestDate: '09-08-2015', status:'new', employeeName: 'John Doe', leaveDays: '2'},
		{permissionId: 'AL00049', requestDate: '09-08-2015', status:'new', employeeName: 'John Doe', leaveDays: '3'},
		{permissionId: 'AL00050', requestDate: '09-08-2015', status:'new', employeeName: 'John Doe', leaveDays: '2'}
	];

	$log.info('Inside Attendance Permission Controller');

	vm.ui = {
		tableParams: new ngTableParams(
			{
			    page: 1,
			    count: 10,
	            filter: {
	            	permissionId: '',
	                requestDate: '',
	                status: '',
	                employeeName: '',
					leaveDays: ''
	            },
	            sorting: {
	            	permissionId: 'asc',
		            requestDate: 'asc',
		            status: 'asc',
		            employeeName: 'asc',
					leaveDays: 'asc'
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

AttendancePermissionController.$inject = ['$log', '$scope', '$rootScope', 'ngTableParams', '$filter'];
