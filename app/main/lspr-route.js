'use strict';

/**
 * LSPR Route Configuration

 */

lspr.route = angular.module("lspr.route", ['ngRoute']);


lspr.route.config(['$routeProvider', function($routeProvider) {

	$routeProvider
		.when(
			lsprNav.auth.path, {
			templateUrl: 'components/99-authentication/login/login.html',
			controller: 'LoginController',
			controllerAs: 'vm',
			resolve: LoginController.resolve
		})

	    .when(
	        '/application', {
	        templateUrl: 'components/99-authentication/lock/lock.html',
	        controller: 'LockController',
	        controllerAs: 'vm',
	        resolve: LockController.resolve
	    })
	    .when(
	        '/application/:applicantId', {
	        templateUrl: 'components/01-recruitment/applicant/create/create-applicant-public.html',
	        controller: 'CreateApplicantControllerPublic',
	        controllerAs: 'vm',
	        resolve: CreateApplicantControllerPublic.resolve
	    })

	    //TODO: Redirect missing route to 404 page
	    .otherwise({
	        redirectTo: lsprNav.auth.path
	    });

}]);
