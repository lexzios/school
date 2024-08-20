'use strict';

/**
 * @ngdoc function
 * @name lspr.payrollList.controller:PayrollListController
 * @description
 * # PayrollListController
 * Controller of the PayrollList component
 */
lspr.payroll.controller('PayrollListController', PayrollListController);

function PayrollListController ($log, ngTableParams, $filter) {

	$log.info('Inside PayrollList Controller');

	var vm = this;

	vm.mockupData = [
	    {department: "Finance", name: "Moroni", nik:'0973027', classification: "Manager"},
	    {department: "Finance", name: "Tiancum", nik:'1245627', classification: "Manager"},
	    {department: "Finance", name: "Jacob", nik:'1073027', classification: "Manager"},
	    {department: "Finance", name: "Nephi", nik:'0973027', classification: "Manager"},
	    {department: "Finance", name: "Enos", nik:'0973027', classification: "Manager"},
	    {department: "Finance", name: "Tiancum", nik:'1245627', classification: "Manager"},
	    {department: "Finance", name: "Jacob", nik:'1073027', classification: "Manager"},
	    {department: "Finance", name: "Nephi", nik:'0973027', classification: "Manager"},
	    {department: "Finance", name: "Enos", nik:'0973027', classification: "Manager"},
	    {department: "Finance", name: "Tiancum", nik:'1245627', classification: "Manager"},
	    {department: "Finance", name: "Jacob", nik:'1073027', classification: "Manager"},
	    {department: "Finance", name: "Nephi", nik:'0973027', classification: "Manager"},
	    {department: "Finance", name: "Enos", nik:'0973027', classification: "Manager"},
	    {department: "Finance", name: "Tiancum", nik:'1245627', classification: "Manager"},
	    {department: "Finance", name: "Jacob", nik:'1073027', classification: "Manager"},
	    {department: "Finance", name: "Nephi", nik:'0973027', classification: "Manager"},
	    {department: "Finance", name: "Enos", nik:'0973027', classification: "Manager"}
	];

	vm.ui = {
		tableParams: new ngTableParams(
			{
			    page: 1,         
			    count: 10,
	            filter: {
	            	department: '',
	                name: '',
	                nik: '',
	                classification: ''
	            },
	            sorting: {
	            	department: 'asc',
		            name: 'asc',
		            nik: 'asc',
		            classification: 'asc'
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

PayrollListController.$inject = ['$log', 'ngTableParams', '$filter'];
