'use strict';

/**
 * @ngdoc function
 * @name lspr.attendance.controller:AttendanceLeaveController
 * @description
 * # AttendanceLeaveController
 * Controller of the Attendance Leave component
 */
lspr.attendance.controller('AttendanceLeaveController', AttendanceLeaveController);

function AttendanceLeaveController ($log, $scope, $rootScope, ngTableParams, $filter) {

	var vm = this;

	vm.mockupData = [
		{leaveId: 'AL00401', requestDate: '09-08-2015', status:'new', employeeName: 'John Doe', leaveDays: '3'},
		{leaveId: 'AL00501', requestDate: '11-07-2015', status:'new', employeeName: 'John Doe', leaveDays: '2'},
		{leaveId: 'AL00601', requestDate: '05-08-2015', status:'new', employeeName: 'John Doe', leaveDays: '2'},
		{leaveId: 'AL00701', requestDate: '02-07-2015', status:'new', employeeName: 'John Doe', leaveDays: '1'},
	];

	$log.info('Inside Attendance Leave Controller');

	vm.ui = {
		tableParams: new ngTableParams(
			{
			    page: 1,
			    count: 10,
	            filter: {
	            	leaveId: '',
	                requestDate: '',
	                status: '',
	                employeeName: '',
					leaveDays: ''
	            },
	            sorting: {
	            	leaveId: 'asc',
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

AttendanceLeaveController.$inject = ['$log', '$scope', '$rootScope', 'ngTableParams', '$filter'];
