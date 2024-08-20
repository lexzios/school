'use strict';

/**
 * @ngdoc function
 * @name lspr.recruitment.controller:RequisitionController
 * @description
 * # RequisitionController
 * Controller of the Requisition component
 */
lspr.recruitment.controller('RequisitionController', RequisitionController);

function RequisitionController ($log, $scope, $rootScope, ngTableParams, $filter) {

	var vm = this;

	vm.mockupData = [
		{requestId: "RHR00004", department: "Human Resource", requestDate:'09-08-2015', status: "Approved"},
		{requestId: "RHR00005", department: "Human Resource", requestDate:'09-08-2015', status: "Approved"},
		{requestId: "RHR00006", department: "Human Resource", requestDate:'09-08-2015', status: "Approved"}
	];

	$log.info('Inside Requisition Controller');

	vm.ui = {
		tableParams: new ngTableParams(
			{
			    page: 1,
			    count: 10,
	            filter: {
	            	requestId: '',
	                department: '',
	                requestDate: '',
	                status: ''
	            },
	            sorting: {
	            	requestId: 'asc',
		            department: 'asc',
		            requestDate: 'asc',
		            status: 'asc'
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

RequisitionController.$inject = ['$log', '$scope', '$rootScope', 'ngTableParams', '$filter'];
