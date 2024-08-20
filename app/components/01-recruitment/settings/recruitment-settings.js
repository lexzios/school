'use strict';

/**
 * @ngdoc function
 * @name lspr.recruitment.controller:RecruitmentSettingsController
 * @description
 * # RecruitmentSettingsController
 * Controller of the Recruitment Settings component
 */
lspr.recruitment.controller('RecruitmentSettingsController', RecruitmentSettingsController);

function RecruitmentSettingsController ($log, $scope, $rootScope, lsprNav) {

	var vm = this;
	vm.rows = [0];

	$log.info('Inside Recruitment Settings Controller');

	vm.ui =  {
		tab: {
			jobDescription: false
		},
		addRow: function(){
			vm.rows.push(vm.rows.length);
		},
		removeRow: function(index){
			vm.rows.splice(index, 1);
		},
	};

}

RecruitmentSettingsController.$inject = ['$log', '$scope', '$rootScope', 'lsprNav'];
