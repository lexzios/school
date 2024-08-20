'use strict';

/**
 * @ngdoc function
 * @name lspr.dashboard.controller:DashboardController
 * @description
 * # DashboardController
 * Controller of the Dashboard component
 */
lspr.dashboard = angular.module('lspr.dashboard', []);
lspr.dashboard.controller('DashboardController', DashboardController);

function DashboardController ($log, $scope) {

	var vm = this;

	$log.info('Inside Dashboard Controller');

	vm.settings = {
	   general: {
		   open: true
	   },
	   job: {
		   open: false
	   }
	};
}

DashboardController.$inject = ['$log', '$scope'];
