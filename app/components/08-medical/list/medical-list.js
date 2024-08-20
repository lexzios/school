'use strict';

/**
 * @ngdoc function
 * @name lspr.medical.controller:MedicalListController
 * @description
 * # MedicalListController
 * Controller of the MedicalList component
 */
lspr.medical.controller('MedicalListController', MedicalListController);

function MedicalListController ($log, $scope, $rootScope, ngTableParams, $filter) {

	var vm = this;

	vm.mockupData = [
		{medicalId: 'MR00051', requestDate: '09-08-2015', amount:'750.000 IDR', employeeName: 'John Doe'},
		{medicalId: 'MR00052', requestDate: '10-08-2015', amount:'500.000 IDR', employeeName: 'Jane Doe'},
		{medicalId: 'MR00053', requestDate: '11-08-2015', amount:'800.000 IDR', employeeName: 'John Doe'},
	];

	$log.info('Inside Medical List Controller');

	vm.ui = {
		tableParams: new ngTableParams(
			{
			    page: 1,
			    count: 10,
	            filter: {
	            	medicalId: '',
	                requestDate: '',
	                amount: '',
	                employeeName: ''
	            },
	            sorting: {
	            	medicalId: 'asc',
		            requestDate: 'asc',
		            amount: 'asc',
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

MedicalListController.$inject = ['$log', '$scope', '$rootScope', 'ngTableParams', '$filter'];
