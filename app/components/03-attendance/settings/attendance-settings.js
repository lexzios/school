'use strict';

/**
 * @ngdoc function
 * @name lspr.attendance.controller:AttendanceSettingsController
 * @description
 * # AttendanceSettingsController
 * Controller of the AttendanceSettings Dashboard component
 */
lspr.attendance.controller('AttendanceSettingsController', AttendanceSettingsController);

function AttendanceSettingsController ($log, $scope, $rootScope) {

	var vm = this;

	$log.info('Inside AttendanceSettings Dashboard Controller');


}

AttendanceSettingsController.$inject = ['$log', '$scope', '$rootScope'];
