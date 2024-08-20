'use strict';

/**
 * @ngdoc function
 * @name lspr.recruitment.controller:DetailRequisitionController
 * @description
 * # DetailRequisitionController
 * Controller of the DetailRequisition component
 */
lspr.recruitment.controller('DetailRequisitionController', DetailRequisitionController);

function DetailRequisitionController ($log, $scope, $rootScope) {

	var vm = this;

	vm.requisitionForm = {};

	vm.requisitionForm.replacement = true;
	vm.requisitionForm.period = {
		temporary: true
	};
	vm.requisitionForm.hardSkills = {
		etc: true
	};
	vm.requisitionForm.softSkills = {
		etc: true
	};

	vm.requisitionForm.period.temporary

	$log.info('Inside DetailRequisition Controller');


}

DetailRequisitionController.$inject = ['$log', '$scope', '$rootScope'];
