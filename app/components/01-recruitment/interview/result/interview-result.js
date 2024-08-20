'use strict';

/**
 * @ngdoc function
 * @name lspr.recruitment.controller:InterviewResultController
 * @description
 * # InterviewResultController
 * Controller of the InterviewResult component
 */
lspr.recruitment.controller('InterviewResultController', InterviewResultController);

function InterviewResultController ($log, $location, $rootScope) {

	var vm = this;

	$log.info('Inside InterviewResult Controller');

	vm.ui = {
		tab: {
			active: true
		}
	};

	var param = $location.search();

	if(param.i) {
		vm.ui.tab.active = true;
	}

}

InterviewController.$inject = ['$log', '$location', '$rootScope'];
