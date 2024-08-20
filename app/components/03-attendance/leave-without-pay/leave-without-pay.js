'use strict';

/**
 * @ngdoc function
 * @name lspr.attendance.controller:LeaveWithoutPayController
 * @description
 * # LeaveWithoutPayController
 * Controller of the Leave Without Pay component
 */
lspr.attendance.controller('LeaveWithoutPayController', LeaveWithoutPayController);

function LeaveWithoutPayController ($log, $scope, $rootScope, ngTableParams, $filter) {

	var vm = this;

	vm.mockupData = [
		{leaveWithoutPayId: 'AL00046', requestDate: '09-08-2015', status:'approved', employeeName: 'John Doe', reason: 'sick'},
		{leaveWithoutPayId: 'AL00047', requestDate: '19-08-2015', status:'pending', employeeName: 'John Doe', reason: 'sick'},
		{leaveWithoutPayId: 'AL00048', requestDate: '29-08-2015', status:'approved', employeeName: 'John Doe', reason: 'sick'}
	];

	$log.info('Inside Leave Without Pay Controller');

	vm.ui = {
		tableParams: new ngTableParams(
			{
			    page: 1,
			    count: 10,
	            filter: {
	            	leaveWithoutPayId: '',
	                requestDate: '',
	                status: '',
	                employeeName: '',
					reason: ''
	            },
	            sorting: {
	            	leaveWithoutPayId: 'asc',
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

LeaveWithoutPayController.$inject = ['$log', '$scope', '$rootScope', 'ngTableParams', '$filter'];
