'use strict';

/**
 * @ngdoc function
 * @name lspr.attendance.controller:AttendanceController
 * @description
 * # AttendanceController
 * Controller of the Attendance Dashboard component
 */
lspr.attendance = angular.module('lspr.attendance', []);
lspr.attendance.controller('AttendanceController', AttendanceController);

function AttendanceController ($log, $scope, $rootScope) {

	var vm = this;

	$log.info('Inside Attendance Dashboard Controller');


}

AttendanceController.$inject = ['$log', '$scope', '$rootScope'];
