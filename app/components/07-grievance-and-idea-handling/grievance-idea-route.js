'use strict';

/**
 * LSPR Grievance Route Configuration

 */

 lspr.grievance.config(['$routeProvider', function($routeProvider) {

 	$routeProvider
        .when(
            lsprNav.grievanceAndIdeaHandling.path, {
                templateUrl: 'components/07-grievance-and-idea-handling/grievance-idea.html',
                controller: 'GrievanceAndIdeaHandlingController',
                controllerAs: 'vm'
            }
        )
        .when(
            lsprNav.grievanceAndIdeaHandling._action.list, {
                templateUrl: 'components/07-grievance-and-idea-handling/list/list-submissions.html',
                controller: 'ListSubmissionsController',
                controllerAs: 'vm'
            }
        )
        .when(
            lsprNav.grievanceAndIdeaHandling._action.create, {
                templateUrl: 'components/07-grievance-and-idea-handling/create/create-submissions.html',
                controller: 'CreateSubmissionsController',
                controllerAs: 'vm'
            }
        )
        .when(
            lsprNav.grievanceAndIdeaHandling._action.detail, {
                templateUrl: 'components/07-grievance-and-idea-handling/detail/detail-submissions.html',
                controller: 'DetailSubmissionsController',
                controllerAs: 'vm'
            }
        )
        .when(
            lsprNav.grievanceAndIdeaHandling.settings.path, {
                templateUrl: 'components/07-grievance-and-idea-handling/settings/grievance-idea-settings.html',
                controller: 'GrievanceAndIdeaHandlingSettingsController',
                controllerAs: 'vm'
            }
        );

 }]);
