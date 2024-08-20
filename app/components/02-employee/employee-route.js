'use strict';

/**
 * LSPR Employee Route Configuration

 */

 lspr.employee.config(['$routeProvider', function($routeProvider) {

 	$routeProvider
        .when(
            lsprNav.employee.path, {
            templateUrl: 'components/02-employee/employee.html',
            controller: 'EmployeeController',
            controllerAs: 'vm'
        })
        .when(
            lsprNav.employee._action.list, {
            templateUrl: 'components/02-employee/list/employee-list.html',
            controller: 'EmployeeListController',
            controllerAs: 'vm'
        })
        .when(
            lsprNav.employee.profile.path, {
            templateUrl: 'components/02-employee/profile/employee-profile.html',
            controller: 'EmployeeProfileController',
            controllerAs: 'vm'
        })
        .when(
            lsprNav.employee.attendance.path, {
            templateUrl: 'components/02-employee/attendance/employee-attendance.html',
            controller: 'EmployeeAttendanceController',
            controllerAs: 'vm'
        })
        .when(
            lsprNav.employee.training.path, {
            templateUrl: 'components/02-employee/training/employee-training.html',
            controller: 'EmployeeTrainingController',
            controllerAs: 'vm'
        })
        .when(
            lsprNav.employee.loan.path, {
            templateUrl: 'components/02-employee/loan/employee-loan.html',
            controller: 'EmployeeLoanController',
            controllerAs: 'vm'
        })
        .when(
            lsprNav.employee.medical.path, {
            templateUrl: 'components/02-employee/medical/employee-medical.html',
            controller: 'EmployeeMedicalController',
            controllerAs: 'vm'
        })
        .when(
            lsprNav.employee.allowance.path, {
            templateUrl: 'components/02-employee/allowance/employee-allowance.html',
            controller: 'EmployeeAllowanceController',
            controllerAs: 'vm'
        })
        .when(
            lsprNav.employee.allowance._action.list, {
            templateUrl: 'components/02-employee/allowance/list/employee-allowance-list.html',
            controller: 'EmployeeAllowanceListController',
            controllerAs: 'vm'
        })
        .when(
            lsprNav.employee.allowance.education._action.create, {
            templateUrl: 'components/02-employee/allowance/education/create/create-education-allowance.html',
            controller: 'CreateEducationAllowanceController',
            controllerAs: 'vm'
        })
        .when(
            lsprNav.employee.allowance.education._action.detail, {
            templateUrl: 'components/02-employee/allowance/education/detail/education-allowance-detail.html',
            controller: 'DetailEducationAllowanceController',
            controllerAs: 'vm'
        })
        .when(
        	lsprNav.employee.changeStatus.path, {
        	templateUrl: 'components/02-employee/change-status/change-status.html',
        	controller: 'ChangeStatusController',
        	controllerAs: 'vm'
        })
        .when(
        	lsprNav.employee.changeStatus._action.edit, {
        	templateUrl: 'components/02-employee/change-status/edit/edit-change.html',
        	controller: 'EditChangeController',
        	controllerAs: 'vm'
        })
        .when(
            lsprNav.employee.noticeLetter.path, {
            templateUrl: 'components/02-employee/notice-letter/notice-letter.html',
            controller: 'NoticeLetterController',
            controllerAs: 'vm'
        })
        .when(
            lsprNav.employee.noticeLetter._action.create, {
            templateUrl: 'components/02-employee/notice-letter/create/create-notice-letter.html',
            controller: 'CreateNoticeLetterController',
            controllerAs: 'vm'
        })
        .when(
            lsprNav.employee.noticeLetter._action.detail, {
            templateUrl: 'components/02-employee/notice-letter/detail/detail-notice-letter.html',
            controller: 'DetailNoticeLetterController',
            controllerAs: 'vm'
        })
        .when(
            lsprNav.employee.exit.path, {
            templateUrl: 'components/02-employee/exit/employee-exit.html',
            controller: 'EmployeeExitController',
            controllerAs: 'vm'
        })
        .when(
            lsprNav.employee.exit._action.create, {
            templateUrl: 'components/02-employee/exit/create/create-exit.html',
            controller: 'CreateExitController',
            controllerAs: 'vm'
        })
        .when(
            lsprNav.employee.exit._action.edit, {
            templateUrl: 'components/02-employee/exit/edit/edit-exit.html',
            controller: 'EditExitController',
            controllerAs: 'vm'
        })
        .when(
            lsprNav.employee.exit._action.detail, {
            templateUrl: 'components/02-employee/exit/detail/detail-exit.html',
            controller: 'DetailExitController',
            controllerAs: 'vm'
        })
        .when(
            lsprNav.employee.exit.interview._action.create, {
            templateUrl: 'components/02-employee/exit/interview/create/create-exit-interview.html',
            controller: 'CreateExitInterviewController',
            controllerAs: 'vm'
        })
        .when(
            lsprNav.employee.exit.interview._action.edit, {
            templateUrl: 'components/02-employee/exit/interview/edit/edit-exit-interview.html',
            controller: 'EditExitInterviewController',
            controllerAs: 'vm'
        })
        .when(
            lsprNav.employee.exit.interview._action.detail, {
            templateUrl: 'components/02-employee/exit/interview/detail/detail-exit-interview.html',
            controller: 'DetailExitInterviewController',
            controllerAs: 'vm'
        })
        .when(
            lsprNav.employee.exit.checklist.path, {
            templateUrl: 'components/02-employee/exit/checklist/exit-checklist.html',
            controller: 'ExitChecklistController',
            controllerAs: 'vm'
        })
        .when(
            lsprNav.employee.settings.path, {
            templateUrl: 'components/02-employee/settings/employee-settings.html',
            controller: 'EmployeeSettingsController',
            controllerAs: 'vm'
        }).when(
            lsprNav.employee.resignedEmployee.path, {
            templateUrl: 'components/02-employee/resigned-employee/resigned-employee.html',
            controller: 'ResignedEmployeeController',
            controllerAs: 'vm'
        });

 }]);
