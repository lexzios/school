'use strict';

/**
 * @ngdoc function
 * @name lspr.recruitment.controller:RecruitmentController
 * @description
 * # RecruitmentController
 * Controller of the Recruitment component
 */
lspr.recruitment = angular.module('lspr.recruitment', []);
lspr.recruitment.controller('RecruitmentController', RecruitmentController);

function RecruitmentController ($log, $scope, $rootScope, lsprNav) {

	var vm = this;

	$log.info('Inside Recruitment Controller');
}

RecruitmentController.$inject = ['$log', '$scope', '$rootScope', 'lsprNav'];
