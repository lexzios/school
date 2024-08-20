'use strict';

/**
 * LSPR Recruitment Route Configuration

 */

 lspr.recruitment.config(['$routeProvider', function($routeProvider) {

 	$routeProvider
        .when(
            lsprNav.recruitment.path, {
            templateUrl: 'components/01-recruitment/recruitment.html',
            controller: 'RecruitmentController',
            controllerAs: 'vm'
        })
        .when(
            lsprNav.recruitment.requisition.path, {
            templateUrl: 'components/01-recruitment/requisition/requisition.html',
            controller: 'RequisitionController',
            controllerAs: 'vm'
        })
        .when(
            lsprNav.recruitment.requisition._action.create, {
            templateUrl: 'components/01-recruitment/requisition/create/create-requisition.html',
            controller: 'CreateRequisitionController',
            controllerAs: 'vm'
        })
        .when(
            lsprNav.recruitment.requisition._action.detail, {
            templateUrl: 'components/01-recruitment/requisition/detail/detail-requisition.html',
            controller: 'DetailRequisitionController',
            controllerAs: 'vm'
        })
        .when(
            lsprNav.recruitment.interview.path, {
            templateUrl: 'components/01-recruitment/interview/interview.html',
            controller: 'InterviewController',
            controllerAs: 'vm'
        })
        .when(
            lsprNav.recruitment.interview.schedule.path, {
            templateUrl: 'components/01-recruitment/interview/schedule/interview-schedule.html',
            controller: 'InterviewScheduleController',
            controllerAs: 'vm'
        })
        .when(
            lsprNav.recruitment.interview.schedule._action.create, {
            templateUrl: 'components/01-recruitment/interview/schedule/create/create-schedule.html',
            controller: 'CreateScheduleController',
            controllerAs: 'vm'
        })
        .when(
            lsprNav.recruitment.interview.schedule._action.edit, {
            templateUrl: 'components/01-recruitment/interview/schedule/edit/edit-schedule.html',
            controller: 'EditScheduleController',
            controllerAs: 'vm'
        })
        .when(
            lsprNav.recruitment.interview.schedule._action.search, {
            templateUrl: 'components/01-recruitment/interview/schedule/search/search-schedule.html',
            controller: 'SearchScheduleController',
            controllerAs: 'vm'
        })
        .when(
            lsprNav.recruitment.interview.result.path, {
            templateUrl: 'components/01-recruitment/interview/result/interview-result.html',
            controller: 'InterviewResultController',
            controllerAs: 'vm'
        })
        .when(
            lsprNav.recruitment.interview.result._action.create, {
            templateUrl: 'components/01-recruitment/interview/result/create/create-result.html',
            controller: 'CreateResultController',
            controllerAs: 'vm'
        })
        .when(
            lsprNav.recruitment.interview.result.user._action.detail, {
            templateUrl: 'components/01-recruitment/interview/result/user/detail/detail-result.html',
            controller: 'DetailResultController',
            controllerAs: 'vm'
        })
        .when(
            lsprNav.recruitment.interview.result.humanResource._action.detail, {
            templateUrl: 'components/01-recruitment/interview/result/human-resource/detail-hr-interview-result.html',
            controller: 'DetailHrInterviewResultController',
            controllerAs: 'vm'
        })
        .when(
            lsprNav.recruitment.applicant.path, {
            templateUrl: 'components/01-recruitment/applicant/applicant.html',
            controller: 'ApplicantController',
            controllerAs: 'vm'
        })
        .when(
            lsprNav.recruitment.applicant._action.create, {
            templateUrl: 'components/01-recruitment/applicant/create/create-applicant.html',
            controller: 'ApplicantController',
            controllerAs: 'vm'
        })
        .when(
            lsprNav.recruitment.applicant._action.detail, {
            templateUrl: 'components/01-recruitment/applicant/detail/detail-applicant.html',
            controller: 'DetailApplicantController',
            controllerAs: 'vm'
        })
        .when(
            lsprNav.recruitment.applicant.interview.path, {
            templateUrl: 'components/01-recruitment/applicant/interview/applicant-interview.html',
            controller: 'ApplicantInterviewController',
            controllerAs: 'vm'
        })
        .when(
            lsprNav.recruitment.applicant.entrance.path, {
            templateUrl: 'components/01-recruitment/applicant/entrance/applicant-entrance.html',
            controller: 'ApplicantEntranceController',
            controllerAs: 'vm'
        })
        .when(
            lsprNav.recruitment.settings.path, {
            templateUrl: 'components/01-recruitment/settings/recruitment-settings.html',
            controller: 'RecruitmentSettingsController',
            controllerAs: 'vm'
        });

 }]);
