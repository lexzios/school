'use strict';

/**
 * @ngdoc function
 * @name lspr.controller:CreateApplicantControllerPublic
 * @description
 * # CreateApplicantControllerPublic
 * Controller of the CreateApplicantPublic component
 */
lspr.controller('CreateApplicantControllerPublic', CreateApplicantControllerPublic);

function CreateApplicantControllerPublic ($log, $scope, $rootScope) {

	var vm = this;

	$rootScope.layout = {
		isInternal: false
	}

	$log.info('Inside CreateApplicantPublic Controller');


}

CreateApplicantControllerPublic.$inject = ['$log', '$scope', '$rootScope'];

CreateApplicantControllerPublic.resolve = {
    data : ['$rootScope', function($rootScope) {
		$rootScope.layout.isInternal = false;
        $rootScope.layout.lock = true;
    }]
};
