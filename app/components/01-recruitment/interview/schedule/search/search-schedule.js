'use strict';

/**
 * @ngdoc function
 * @name lspr.recruitment.controller:SearchScheduleController
 * @description
 * # SearchScheduleController
 * Controller of the SearchSchedule component
 */
lspr.recruitment.controller('SearchScheduleController', SearchScheduleController);

function SearchScheduleController ($log, $scope, $rootScope, $routeParams) {

	var vm = this;

	vm.selectedDate = $routeParams.date;

	$log.info('Inside SearchSchedule Controller');


}

SearchScheduleController.$inject = ['$log', '$scope', '$rootScope', '$routeParams'];
