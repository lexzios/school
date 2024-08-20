'use strict';

/**
 * @ngdoc function
 * @name lspr.recruitment.controller:ApplicantController
 * @description
 * # ApplicantController
 * Controller of the Applicant component
 */
lspr.recruitment.controller('ApplicantController', ApplicantController);

function ApplicantController ($log, $scope, $rootScope, ngTableParams, $filter) {

	var vm = this;

	vm.mockupData = [
		{applicantId: 'A000401', registeredDate: '09-08-2015', status:'new', applicantName: 'John Doe'},
		{applicantId: 'A000501', registeredDate: '09-09-2015', status:'new', applicantName: 'John Doe'},
		{applicantId: 'A000601', registeredDate: '09-10-2015', status:'new', applicantName: 'John Doe'},
		{applicantId: 'A000701', registeredDate: '09-11-2015', status:'new', applicantName: 'John Doe'},
	];

	$log.info('Inside Applicant Controller');

	vm.ui = {
		tableParams: new ngTableParams(
			{
			    page: 1,
			    count: 10,
	            filter: {
	            	applicantId: '',
	                registeredDate: '',
	                status: '',
	                applicantName: ''
	            },
	            sorting: {
	            	applicantId: 'asc',
		            registeredDate: 'asc',
		            status: 'asc',
		            applicantName: 'asc'
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

ApplicantController.$inject = ['$log', '$scope', '$rootScope', 'ngTableParams', '$filter'];
