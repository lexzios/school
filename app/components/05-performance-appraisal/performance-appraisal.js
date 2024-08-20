'use strict';

/**
 * @ngdoc function
 * @name lspr.PerformanceAppraisal.controller:PerformanceAppraisalController
 * @description
 * # PerformanceAppraisalController
 * Controller of the PerformanceAppraisal component
 */

lspr.performanceAppraisal = angular.module('lspr.performanceAppraisal', []);
lspr.performanceAppraisal.controller('PerformanceAppraisalController', PerformanceAppraisalController);

function PerformanceAppraisalController ($log, $scope, $rootScope) {

	var vm = this;

	$log.info('Inside PerformanceAppraisal Controller');


}

PerformanceAppraisalController.$inject = ['$log', '$scope', '$rootScope'];
