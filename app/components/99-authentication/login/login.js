'use strict';

/**
 * @ngdoc function
 * @name lspr.controller:LoginController
 * @description
 * # LoginController
 * Controller of the home component
 */
lspr.controller('LoginController', LoginController);

function LoginController ($log, $scope, $auth, lsprNav, $rootScope, $location, TokenFactory) {

	var vm = this;

	$log.info('Inside Login Controller');

	var token = TokenFactory.getToken();

	$rootScope.layout = {
		isInternal: false,
	};

	vm.authenticate = function() {

		$location.path(lsprNav.dashboard.path);
		$rootScope.layout.isInternal = true;
        $rootScope.layout.lock = false;
        
		// var credentials = {
		// 	nik: vm.nik,
		// 	password: vm.password
		// };
		// $log.info(credentials);

		// $auth.login(credentials).then(function(response) {
		// 	$log.info($auth.getPayload());
	 //   });
	};
}

LoginController.$inject = ['$log', '$scope', '$auth', 'lsprNav', '$rootScope', '$location', 'TokenFactory'];

LoginController.resolve = {
    data : ['$rootScope', function($rootScope) {
        $rootScope.layout.isInternal = false;
        $rootScope.layout.lock = true;
    }]
};
