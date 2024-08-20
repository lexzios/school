'use strict';

/**
 * @ngdoc function
 * @name lspr.employee.controller:EmployeeExitController
 * @description
 * # EmployeeController
 * Controller of the Employee Exit component
 */
lspr.employee.controller('EmployeeExitController', EmployeeExitController);

function EmployeeExitController ($log, $scope, $rootScope, ngTableParams, $filter) {

	var vm = this;

	vm.mockupData = [
		{employeeExitId: 'EX00401', requestDate: '09-08-2015', status:'new', employeeName: 'John Doe'},
		{employeeExitId: 'EX00501', requestDate: '19-08-2015', status:'new', employeeName: 'John Doe'},
		{employeeExitId: 'EX00601', requestDate: '29-08-2015', status:'new', employeeName: 'John Doe'},
		{employeeExitId: 'EX00701', requestDate: '09-07-2015', status:'new', employeeName: 'John Doe'}
	];

	$log.info('Inside Employee Exit Controller');

	vm.ui = {
		tableParams: new ngTableParams(
			{
			    page: 1,
			    count: 10,
	            filter: {
	            	employeeExitId: '',
	                requestDate: '',
	                status: '',
	                employeeName: ''
	            },
	            sorting: {
	            	employeeExitId: 'asc',
		            requestDate: 'asc',
		            status: 'asc',
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

EmployeeExitController.$inject = ['$log', '$scope', '$rootScope', 'ngTableParams', '$filter'];
