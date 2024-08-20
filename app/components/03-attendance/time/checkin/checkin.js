'use strict';

/**
 * @ngdoc function
 * @name lspr.attendance.controller:CheckinController
 * @description
 * # EmployeeController
 * Controller of the CheckinController component
 */
lspr.attendance.controller('CheckinController', CheckinController);

function CheckinController ($log, $scope, $modalInstance, $rootScope, NotificationModal) {
	var vm = this;
	vm.notificationModal = NotificationModal;
	$scope.save = function(){
		//TODO CHECKIN API
		vm.notificationModal.isOpen = false;
		$modalInstance.close();
	};

}

CheckinController.$inject = ['$log', '$scope', '$modalInstance', '$rootScope', 'NotificationModal'];
