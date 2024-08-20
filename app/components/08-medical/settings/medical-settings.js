'use strict';

/**
 * @ngdoc function
 * @name lspr.medical.controller:MedicalSettingsController
 * @description
 * # MedicalSettingsController
 * Controller of the Medical Settings component
 */
lspr.medical.controller('MedicalSettingsController', MedicalSettingsController);

function MedicalSettingsController ($log, $scope, $rootScope) {

	var vm = this;

	$log.info('Inside Medical Settings Controller');

}

MedicalSettingsController.$inject = ['$log', '$scope', '$rootScope'];
