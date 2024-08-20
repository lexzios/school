'use strict';

/**
 * @ngdoc function
 * @name lspr.recruitment.controller:InterviewController
 * @description
 * # InterviewController
 * Controller of the Interview component
 */
lspr.recruitment.controller('InterviewController', InterviewController);

function InterviewController ($log, $scope, $rootScope, ngTableParams, $filter) {
	var vm = this;

	vm.mockupData = [
		{interviewId: 'IS00401', interviewDate: '09-08-2015', applicantNumbers:'5', interviewer: "John Doe"},
		{interviewId: 'IS00501', interviewDate: '12-09-2015', applicantNumbers:'8', interviewer: "John Doe"},
		{interviewId: 'IS00601', interviewDate: '04-05-2015', applicantNumbers:'5', interviewer: "John Doe"},
		{interviewId: 'IS00701', interviewDate: '06-06-2015', applicantNumbers:'4', interviewer: "John Doe"},
		{interviewId: 'IS00801', interviewDate: '07-07-2015', applicantNumbers:'5', interviewer: "John Doe"}
	];

	$log.info('Inside Interview Controller');

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

InterviewController.$inject = ['$log', '$scope', '$rootScope', 'ngTableParams', '$filter'];
