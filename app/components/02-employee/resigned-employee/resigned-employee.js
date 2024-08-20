'use strict';

/**
 * @ngdoc function
 * @name lspr.employee.controller:ResignedEmployeeController
 * @description
 * # ResignedEmployeeController
 * Controller of the Employee Attendance component
 */
 lspr.employee.controller('ResignedEmployeeController', ResignedEmployeeController);

 function ResignedEmployeeController ($log, $scope, $rootScope, ngTableParams, $filter) {

     var vm = this;

 	vm.mockupData = [
 		{nik: '34567734', dateResigned: '09-08-2015', employeeName:'John Doe', department: 'IT'},
        {nik: '34567734', dateResigned: '09-08-2015', employeeName:'John Doe', department: 'IT'},
        {nik: '34567734', dateResigned: '09-08-2015', employeeName:'John Doe', department: 'IT'}
 	];

 	$log.info('Inside Resigned Employee Controller');
 
 	vm.ui = {
 		tableParams: new ngTableParams(
 			{
 			    page: 1,
 			    count: 10,
 	            filter: {
 	            	nik: '',
 	                dateResigned: '',
 	                employeeName: '',
 	                department: ''
 	            },
 	            sorting: {
 	            	nik: 'asc',
 		            dateResigned: 'asc',
 		            employeeName: 'asc',
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

 ResignedEmployeeController.$inject = ['$log', '$scope', '$rootScope', 'ngTableParams', '$filter'];
