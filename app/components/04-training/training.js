'use strict';

/**
 * @ngdoc function
 * @name lspr.training.controller:TrainingController
 * @description
 * # TrainingController
 * Controller of the RecruitmentTraining component
 */
lspr.training = angular.module('lspr.training', []) ;
lspr.training.controller('TrainingController', TrainingController);

function TrainingController ($log, $scope, $rootScope, lsprNav) {

	var vm = this;

	$log.info('Inside Training Controller');
}

TrainingController.$inject = ['$log', '$scope', '$rootScope', 'lsprNav'];
