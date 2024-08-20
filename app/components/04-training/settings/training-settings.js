'use strict';

/**
 * @ngdoc function
 * @name lspr.training.controller:TrainingSettingsController
 * @description
 * # TrainingSettingsController
 * Controller of the Training Settings component
 */
lspr.training.controller('TrainingSettingsController', TrainingSettingsController);

function TrainingSettingsController ($log, $scope, $rootScope, lsprNav) {

	var vm = this;

	$log.info('Inside Training Settings Controller');

	vm.ui =  {
		tab: {
			jobQualification: false
		}
	};
}

TrainingSettingsController.$inject = ['$log', '$scope', '$rootScope', 'lsprNav'];
