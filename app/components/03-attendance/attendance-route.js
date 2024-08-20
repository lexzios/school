'use strict';

/**
 * LSPR Attendance Route Configuration

 */

 lspr.attendance.config(['$routeProvider', function($routeProvider) {

 	$routeProvider
        .when(
            lsprNav.attendance.path, {
            templateUrl: 'components/03-attendance/attendance.html',
            controller: 'AttendanceLeaveController',
            controllerAs: 'vm'
        })
        .when(
            lsprNav.attendance.time.path, {
            templateUrl: 'components/03-attendance/time/time-management.html',
            controller: 'TimeController',
            controllerAs: 'vm'
        })
        .when(
            lsprNav.attendance.leave.path, {
            templateUrl: 'components/03-attendance/leave/attendance-leave.html',
            controller: 'AttendanceLeaveController',
            controllerAs: 'vm'
        })
        .when(
            lsprNav.attendance.leave._action.create, {
            templateUrl: 'components/03-attendance/leave/create/create-leave.html',
            controller: 'CreateLeaveController',
            controllerAs: 'vm'
        })
        .when(
            lsprNav.attendance.leave._action.edit, {
            templateUrl: 'components/03-attendance/leave/edit/edit-leave.html',
            controller: 'EditLeaveController',
            controllerAs: 'vm'
        })
        .when(
            lsprNav.attendance.leave._action.detail, {
            templateUrl: 'components/03-attendance/leave/detail/detail-leave.html',
            controller: 'DetailLeaveController',
            controllerAs: 'vm'
        })
        .when(
            lsprNav.attendance.permission.path, {
            templateUrl: 'components/03-attendance/permission/attendance-permission.html',
            controller: 'AttendancePermissionController',
            controllerAs: 'vm'
        })
        .when(
            lsprNav.attendance.permission._action.create, {
            templateUrl: 'components/03-attendance/permission/create/create-attendance-permission.html',
            controller: 'CreateAttendancePermissionController',
            controllerAs: 'vm'
        })
        .when(
            lsprNav.attendance.permission._action.detail, {
            templateUrl: 'components/03-attendance/permission/detail/detail-attendance-permission.html',
            controller: 'DetailAttendancePermissionController',
            controllerAs: 'vm'
        })
        .when(
            lsprNav.attendance.settings.path, {
            templateUrl: 'components/03-attendance/settings/attendance-settings.html',
            controller: 'AttendanceSettingsController',
            controllerAs: 'vm'
        })
        .when(
                lsprNav.attendance.workLeavePermission.path, {
                    templateUrl: 'components/03-attendance/work-leave-permission/work-leave-permission.html',
                    controller: 'WorkLeavePermissionController',
                    controllerAs: 'vm'
        })
        .when(
                lsprNav.attendance.workLeavePermission._action.create, {
                    templateUrl: 'components/03-attendance/work-leave-permission/create/create-work-leave-permission.html',
                    controller: 'CreateWorkLeavePermissionController',
                    controllerAs: 'vm'
        })
        .when(
                lsprNav.attendance.workLeavePermission._action.detail, {
                    templateUrl: 'components/03-attendance/work-leave-permission/detail/detail-work-leave-permission.html',
                    controller: 'DetailWorkLeavePermissionController',
                    controllerAs: 'vm'
        })
        .when(
                lsprNav.attendance.leaveWithoutPay.path, {
                    templateUrl: 'components/03-attendance/leave-without-pay/leave-without-pay.html',
                    controller: 'LeaveWithoutPayController',
                    controllerAs: 'vm'
        })
        .when(
                lsprNav.attendance.leaveWithoutPay._action.create, {
                    templateUrl: 'components/03-attendance/leave-without-pay/create/create-leave-without-pay.html',
                    controller: 'CreateLeaveWithoutPayController',
                    controllerAs: 'vm'
        })
        .when(
                lsprNav.attendance.leaveWithoutPay._action.detail, {
                    templateUrl: 'components/03-attendance/leave-without-pay/detail/detail-leave-without-pay.html',
                    controller: 'DetailLeaveWithoutPayController',
                    controllerAs: 'vm'
        });

 }]);
