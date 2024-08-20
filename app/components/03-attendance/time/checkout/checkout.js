'use strict';

/**
 * @ngdoc function
 * @name lspr.attendance.controller:CheckoutController
 * @description
 * # EmployeeController
 * Controller of the CheckoutController component
 */
lspr.attendance.controller('CheckoutController', CheckoutController);

function CheckoutController ($log, $scope, $modalInstance, $rootScope, NotificationModal) {
	var vm = this;
	vm.notificationModal = NotificationModal;
	$scope.save = function(){
		//TODO CHECKIN API
		vm.notificationModal.isOpen = false;
		$modalInstance.close();
	};

}

CheckoutController.$inject = ['$log', '$scope', '$modalInstance', '$rootScope', 'NotificationModal'];
