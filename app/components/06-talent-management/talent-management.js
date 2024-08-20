'use strict';

/**
 * @ngdoc function
 * @name lspr.talentManagement.controller:TalentManagementController
 * @description
 * # TalentManagementController
 * Controller of the TalentManagement component
 */
lspr.talentManagement = angular.module('lspr.talentManagement', []);
lspr.talentManagement.controller('TalentManagementController', TalentManagementController);

function TalentManagementController ($log, $scope, $rootScope) {

	var vm = this;

	$log.info('Inside TalentManagement Controller');


}

TalentManagementController.$inject = ['$log', '$scope', '$rootScope'];
