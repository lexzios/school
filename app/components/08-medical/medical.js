'use strict';

/**
 * @ngdoc function
 * @name lspr.medical.controller:MedicalController
 * @description
 * # MedicalController
 * Controller of the Medical component
 */
lspr.medical = angular.module('lspr.medical', []) ;
lspr.medical.controller('MedicalController', MedicalController);

function MedicalController ($log, $scope, $rootScope, lsprNav) {

	var vm = this;

	$log.info('Inside Medical Controller');
}

MedicalController.$inject = ['$log', '$scope', '$rootScope', 'lsprNav'];
