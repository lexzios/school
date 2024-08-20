'use strict';

/**
 * @ngdoc function
 * @name lspr.controller:RootCtrl
 * @description
 * # RootCtrl
 * Root Component Controller
 */
lspr.controller('RootCtrl', RootCtrl);

function RootCtrl ($log, $scope) {

	var vm = this;

	$log.info('Inside Root Controller');

	$scope.$on('$viewContentLoaded', function() {
	    Metronic.initComponents(); // init core components
	});
}

RootCtrl.$inject = ['$log', '$scope'];

/**
 * @ngdoc function
 * @name lspr.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the Header Component
 */
lspr.controller('HeaderCtrl', HeaderCtrl);

function HeaderCtrl ($rootScope, $scope, dialogs, $auth, $location, NotificationModal, $window) {

	var vm = this;
	vm.notificationModal = NotificationModal;

	vm.checkin = function() {
		if (vm.notificationModal.isOpen) return;
		var dialog = dialogs.create(
			'/components/03-attendance/time/checkin/checkin.html',
			'CheckinController',
			{},
			{size:'md',keyboard: true,backdrop: true,windowClass: 'time-modal'}
		);
		vm.notificationModal.isOpen = true;
		dialog.result.then(function(btn){
			//TODO Check-In
		},function(btn){
			vm.notificationModal.isOpen = false;
		});
	};

	vm.checkout = function() {
		if (vm.notificationModal.isOpen) return;
		var dialog = dialogs.create(
			'/components/03-attendance/time/checkout/checkout.html',
			'CheckoutController',
			{},
			{size:'md',keyboard: true,backdrop: true,windowClass: 'time-modal'}
		);
		vm.notificationModal.isOpen = true;
		dialog.result.then(function(btn){
			//TODO Check-In
		},function(btn){
			vm.notificationModal.isOpen = false;
		});
	};

	vm.logout = function() {
		$auth.logout();
		$window.location.href = '/';
	}

	$scope.$on('$includeContentLoaded', function() {
	    Layout.initHeader();
	});
}

lspr.service('NotificationModal', function () {
    return {};
})

HeaderCtrl.$inject = ['$rootScope', '$scope', 'dialogs', '$auth', '$location', 'NotificationModal', '$window'];

/**
 * @ngdoc function
 * @name lspr.controller:SidebarCtrl
 * @description
 * # SidebarCtrl
 * Controller of the Sidebar Component
 */
lspr.controller('SidebarCtrl', SidebarCtrl);

function SidebarCtrl ($log, $scope, $location) {

	var vm = this;

	vm.isActive = function(location) {
		var path =  $location.path();
		if (location)
			return path.split('/')[1].indexOf(location.replace('/','')) > -1;
		else
			return false;
	};

	$log.info('Sidebar loaded');

	$scope.$on('$includeContentLoaded', function() {
	    Layout.initSidebar(); // init sidebar
	});
}

SidebarCtrl.$inject = ['$log', '$scope', '$location'];

/**
 * @ngdoc function
 * @name lspr.controller:QuickSidebarCtrl
 * @description
 * # QuickSidebarCtrl
 * Controller of the QuickSidebar Component
 */
lspr.controller('QuickSidebarCtrl', QuickSidebarCtrl);

function QuickSidebarCtrl ($scope, $timeout) {
	$scope.$on('$includeContentLoaded', function() {
	    setTimeout(function(){
            QuickSidebar.init(); // init quick sidebar
        }, 2000)
	});
}

QuickSidebarCtrl.$inject = ['$scope', '$timeout'];

/**
 * @ngdoc function
 * @name lspr.controller:FooterCtrl
 * @description
 * # FooterCtrl
 * Controller of the Footer Component
 */
lspr.controller('FooterCtrl', FooterCtrl);

function FooterCtrl ($scope) {
	$scope.$on('$includeContentLoaded', function() {
	    Layout.initFooter(); // init sidebar
	});
}

FooterCtrl.$inject = ['$scope'];
