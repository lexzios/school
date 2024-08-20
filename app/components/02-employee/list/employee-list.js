'use strict';

/**
 * @ngdoc function
 * @name lspr.employee.controller:EmployeeListController
 * @description
 * # EmployeeController
 * Controller of the Employee List component
 */
lspr.employee.controller('EmployeeListController', EmployeeListController);

function EmployeeListController ($log, $scope, $rootScope, ngTableParams, $filter) {

	var vm = this;

	vm.mockupData = [
		{nik: 'E000401', dateJoined: '09-08-2015', fullname:'Clarissa', nickname: 'Puni', position: 'Lecturer', department: 'Education'},
		{nik: 'E000402', dateJoined: '09-08-2015', fullname:'Norman', nickname: 'Norman', position: 'Lecturer', department: 'Education'},
		{nik: 'E000403', dateJoined: '09-08-2015', fullname:'Johannes', nickname: 'Jo', position: 'Lecturer', department: 'Education'},
		{nik: 'E000404', dateJoined: '09-08-2015', fullname:'Akbar', nickname: 'Akbar', position: 'Lecturer', department: 'Education'},
	];

	$log.info('Inside Employee List Controller');

	vm.ui = {
		tableParams: new ngTableParams(
			{
			    page: 1,
			    count: 10,
	            filter: {
	            	nik: '',
	                dateJoined: '',
	                fullname: '',
	                nickname: '',
					position: '',
					department: ''
	            },
	            sorting: {
	            	nik: 'asc',
		            dateJoined: 'asc',
		            fullname: 'asc',
		            nickname: 'asc',
					position: 'asc',
					department: 'asc'
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

EmployeeListController.$inject = ['$log', '$scope', '$rootScope', 'ngTableParams', '$filter'];
