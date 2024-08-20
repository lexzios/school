'use strict';

/**
 * @ngdoc function
 * @name lspr.training.controller:InternalTrainingFeedbackController
 * @description
 * Controller of the Internal Training Feedback component
 */
lspr.training.controller('InternalTrainingFeedbackController', InternalTrainingFeedbackController);

function InternalTrainingFeedbackController ($log, $scope, $rootScope, lsprNav) {

	var vm = this;

	$log.info('Inside Internal Training Feedback Controller');
}

InternalTrainingFeedbackController.$inject = ['$log', '$scope', '$rootScope', 'lsprNav'];
