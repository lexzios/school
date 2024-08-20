'use strict';

/**
 * @ngdoc function
 * @name lspr.training.controller:ExternalTrainingFeedbackController
 * @description
 * Controller of the external Training Feedback component
 */
lspr.training.controller('ExternalTrainingFeedbackController', ExternalTrainingFeedbackController);

function ExternalTrainingFeedbackController ($log, $scope, $rootScope, lsprNav) {

	var vm = this;

	$log.info('Inside external Training Feedback Controller');
}

ExternalTrainingFeedbackController.$inject = ['$log', '$scope', '$rootScope', 'lsprNav'];
