'use strict';

/**
 * @ngdoc function
 * @name lspr.grievance.controller:ListSubmissionsController
 * @description
 * # ListSubmissionsController
 * Controller of the ListSubmissions component
 */
lspr.grievance.controller('ListSubmissionsController', ListSubmissionsController);

function ListSubmissionsController ($log, $scope, $rootScope, ngTableParams, $filter) {

	var vm = this;

	vm.mockupData = [
		{grievanceId: 'SS00001', submissionDate: '09-08-2015', type:'idea', title: 'New desk'},
		{grievanceId: 'SS00002', submissionDate: '09-08-2015', type:'grievance', title: 'Broken chair'}
	];

	$log.info('Inside List Submissions Controller');

	vm.ui = {
		tableParams: new ngTableParams(
			{
			    page: 1,
			    count: 10,
	            filter: {
	            	grievanceId: '',
	                submissionDate: '',
	                type: '',
	                title: ''
	            },
	            sorting: {
	            	grievanceId: 'asc',
		            submissionDate: 'asc',
		            type: 'asc',
		            title: 'asc'
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

ListSubmissionsController.$inject = ['$log', '$scope', '$rootScope', 'ngTableParams', '$filter'];
