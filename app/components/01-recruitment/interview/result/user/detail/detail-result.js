'use strict';

/**
 * @ngdoc function
 * @name lspr.recruitment.controller:DetailResultController
 * @description
 * # DetailResultController
 * Controller of the DetailResult component
 */
lspr.recruitment.controller('DetailResultController', DetailResultController);

function DetailResultController ($log, $scope, $rootScope) {

	var vm = this;

	vm.nav = $rootScope.lsprNav;

	$log.info('Inside DetailResult Controller');

}

DetailResultController.$inject = ['$log', '$scope', '$rootScope'];
