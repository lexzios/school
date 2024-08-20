'use strict';

/**
 * @ngdoc function
 * @name lspr.recruitment.controller:EditResultController
 * @description
 * # EditResultController
 * Controller of the EditResult component
 */
lspr.recruitment.controller('EditResultController', EditResultController);

function EditResultController ($log, $scope, $rootScope) {

	var vm = this;

	vm.nav = $rootScope.lsprNav;

	$log.info('Inside EditResult Controller');

}

EditResultController.$inject = ['$log', '$scope', '$rootScope'];
