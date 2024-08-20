'use strict';

/**
 * @ngdoc function
 * @name lspr.recruitment.controller:ApplicantEntranceController
 * @description
 * # ApplicantEntranceController
 * Controller of the Applicant Entrance component
 */
lspr.recruitment.controller('ApplicantEntranceController', ApplicantEntranceController);

function ApplicantEntranceController ($log, $location, $rootScope) {

	var vm = this;

	$log.info('Inside Applicant Entrance Controller');

	var param = $location.search();

	vm.employee = {
		expat: false
	};

	if(param.expat) {
		vm.employee.expat = true;
	}

}

ApplicantEntranceController.$inject = ['$log', '$location', '$rootScope'];
