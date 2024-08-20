'use strict';

/**
 * @ngdoc function
 * @name lspr.employee.controller:NoticeLetterController
 * @description
 * # EmployeeController
 * Controller of the NoticeLetterController component
 */
lspr.employee.controller('NoticeLetterController', NoticeLetterController);

function NoticeLetterController ($log, $scope, $rootScope, ngTableParams, $filter) {

	var vm = this;

	vm.mockupData = [
		{type: 'SP 1', spDate: '09-08-2015', employeeName: 'John Doe'},
		{type: 'SP 2', spDate: '10-08-2015', employeeName: 'John Doe'},
		{type: 'SP 3', spDate: '11-08-2015', employeeName: 'John Doe'},
		{type: 'SP 2', spDate: '12-08-2015', employeeName: 'John Doe'},
	];

	$log.info('Inside Notice Letter Controller');

	vm.ui = {
		tableParams: new ngTableParams(
			{
			    page: 1,
			    count: 10,
	            filter: {
	            	type: '',
	                spDate: '',
	                employeeName: ''
	            },
	            sorting: {
	            	type: 'asc',
		            spDate: 'asc',
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

NoticeLetterController.$inject = ['$log', '$scope', '$rootScope', 'ngTableParams', '$filter'];
