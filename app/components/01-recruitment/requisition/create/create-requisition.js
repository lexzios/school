'use strict';

/**
 * @ngdoc function
 * @name lspr.recruitment.controller:CreateRequisitionController
 * @description
 * # CreateRequisitionController
 * Controller of the Requisition component
 */
lspr.recruitment.controller('CreateRequisitionController', CreateRequisitionController);

function CreateRequisitionController ($log, $scope, $rootScope) {

	var vm = this;

	$log.info('Inside Create Requisition Controller');

	vm.nav = $rootScope.lsprNav;

	vm.requisitionForm = {};

}

CreateRequisitionController.$inject = ['$log', '$scope', '$rootScope'];
