'use strict';

/**
 * @ngdoc function
 * @name lspr.controller:LockController
 * @description
 * # LockController
 * Controller of the home component
 */
lspr.controller('LockController', LockController);

function LockController ($log, $rootScope) {

	var vm = this;

	$rootScope.layout = {
		isInternal: false
	}

	$log.info('Inside Lock Controller');

}

LockController.$inject = ['$log', '$rootScope'];

LockController.resolve = {
    data : ['$rootScope', function($rootScope) {
        $rootScope.layout.isInternal = false;
        $rootScope.layout.lock = true;
    }]
};
