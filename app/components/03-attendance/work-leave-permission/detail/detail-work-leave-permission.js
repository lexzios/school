'use strict';

/**
 * @ngdoc function
 * @name lspr.attendance.controller:DetailWorkLeavePermissionController
 * @description
 * # DetailWorkLeavePermissionController
 * Controller of the Detail Work Leave Permission component
 */
lspr.attendance.controller('DetailWorkLeavePermissionController', DetailWorkLeavePermissionController);

function DetailWorkLeavePermissionController ($log, $scope, $rootScope, $filter, lsprNav) {

	var vm = this;

	$log.info('Inside Detail Work Leave Controller');

	vm.ui = {
  		currentDate: $filter('date')(Date.now(),'dd-MM-yyyy'),
	  	timePickers: {
			timeLeave: new Date(),
		  	timeReturn: new Date()
	  	},
	  	timePickerConfig: {
		  	hstep: 1,
		  	mstep: 1,
		  	ismeridian: true,
		  	options: {
				hstep: [1, 2, 3],
				mstep: [1, 5, 10, 15, 25, 30]
			}
		}
    };

}

DetailWorkLeavePermissionController.$inject = ['$log', '$scope', '$rootScope', '$filter', 'lsprNav'];
