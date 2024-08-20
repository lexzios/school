'use strict';

/**
 * @ngdoc function
 * @name lspr.grievance.controller:GrievanceAndIdeaHandlingController
 * @description
 * # GrievanceAndIdeaHandlingController
 * Controller of the GrievanceAndIdeaHandling component
 */
lspr.grievance = angular.module('lspr.grievance', []) ;
lspr.grievance.controller('GrievanceAndIdeaHandlingController', GrievanceAndIdeaHandlingController);

function GrievanceAndIdeaHandlingController ($log, $scope, $rootScope, lsprNav) {

	var vm = this;

	$log.info('Inside GrievanceAndIdeaHandlingController');
}

GrievanceAndIdeaHandlingController.$inject = ['$log', '$scope', '$rootScope', 'lsprNav'];
