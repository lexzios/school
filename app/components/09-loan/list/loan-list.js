'use strict';

/**
 * @ngdoc function
 * @name lspr.loan.controller:LoanListController
 * @description
 * # LoanListController
 * Controller of the LoanList component
 */
lspr.loan.controller('LoanListController', LoanListController);

function LoanListController ($log, $scope, $rootScope, ngTableParams, $filter) {

	var vm = this;

	vm.mockupData = [
		{loanId: 'LO00046', requestDate: '09-08-2015', status:'new', employeeName: 'John Doe', amount: '5.000.000 IDR'},
		{loanId: 'LO00047', requestDate: '29-08-2015', status:'new', employeeName: 'John Doe', amount: '5.000.000 IDR'},
		{loanId: 'LO00048', requestDate: '01-09-2015', status:'new', employeeName: 'John Doe', amount: '5.000.000 IDR'},
		{loanId: 'LO00049', requestDate: '05-09-2015', status:'new', employeeName: 'John Doe', amount: '5.000.000 IDR'},
		{loanId: 'LO00050', requestDate: '09-09-2015', status:'new', employeeName: 'John Doe', amount: '5.000.000 IDR'},
		{loanId: 'LO00051', requestDate: '10-09-2015', status:'new', employeeName: 'John Doe', amount: '5.000.000 IDR'},
	];

	$log.info('Inside Loan List Controller');

	vm.ui = {
		tableParams: new ngTableParams(
			{
			    page: 1,
			    count: 10,
	            filter: {
	            	loanId: '',
	                requestDate: '',
	                status: '',
	                employeeName: '',
					amount: ''
	            },
	            sorting: {
	            	loanId: 'asc',
		            requestDate: 'asc',
		            status: 'asc',
		            employeeName: 'asc',
					amount: 'asc'
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

LoanListController.$inject = ['$log', '$scope', '$rootScope', 'ngTableParams', '$filter'];
