'use strict';

/**
 * @ngdoc function
 * @name lspr.medical.controller:DetailMedicalController
 * @description
 * # DetailMedicalController
 * Controller of the Detail Medical component
 */
lspr.medical.controller('DetailMedicalController', DetailMedicalController);

function DetailMedicalController ($log, $scope, $rootScope, lsprNav) {

	$log.info('Inside DetailMedicalController Controller');

	var vm = this;

	/**Dummy Setter**/
	vm.ui = {
		patient: {
			self: true
		}
	};

}

DetailMedicalController.$inject = ['$log', '$scope', '$rootScope', 'lsprNav'];
