'use strict';

/**
 * @ngdoc function
 * @name lspr.recruitment.controller:InterviewScheduleController
 * @description
 * # InterviewScheduleController
 * Controller of the InterviewSchedule component
 */
lspr.recruitment.controller('InterviewScheduleController', InterviewScheduleController);

function InterviewScheduleController($log, $scope, $rootScope, $window) {

    var vm = this;

    $log.info('Inside InterviewSchedule Controller');

    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    /* event source that contains custom events on the scope */
    vm.events = [{
        title: 'John',
        start: new Date(y, m, 1)
    }, {
        title: 'Mary',
        start: new Date(y, m, 1)
    }, {
        id: 999,
        title: 'Ronald',
        start: new Date(y, m, d - 3, 16, 0),
        allDay: false
    }, {
        id: 999,
        title: 'Arthur',
        start: new Date(y, m, d + 4, 16, 0),
        allDay: false
    }, {
        title: 'Tom',
        start: new Date(y, m, d + 1, 19, 0),
        end: new Date(y, m, d + 1, 22, 30),
        allDay: false
    }];

    vm.eventSource = {
        url: "www.lspr.com/api/schedule",
        className: 'gcal-event'
    };

    vm.eventsF = function(start, end, timezone, callback) {
        var s = new Date(start).getTime() / 1000;
        var e = new Date(end).getTime() / 1000;
        var m = new Date(start).getMonth();
        var events = [{
            title: 'Feed Me ' + m,
            start: s + (50000),
            end: s + (100000),
            allDay: false,
            className: ['customFeed']
        }];
        callback(events);
    };

    /* config object */
    vm.calendar = {
        config: {
            displayEventTime: false,
            height: 800,
            editable: true,
            header: {
                left: 'title',
                center: '',
                right: 'today prev,next'
            },
            dayClick: function() {
              vm.calendar.event.createSchedule()
            },
            eventClick: function() {
              vm.calendar.event.detailSchedule()
            }
        },
        event: {
            createSchedule: function() {
                $log.info('Day Clicked');
                 $window.open($rootScope.lsprNav.recruitment.interview.schedule._action.create, '_blank');
            },
            detailSchedule: function() {
                $log.info('Event Clicked');
                 $window.open($rootScope.lsprNav.recruitment.interview.schedule._action.detail, '_blank');
            }
        }
    };

    vm.eventSources = [vm.events, vm.eventSource, vm.eventsF];
}

InterviewScheduleController.$inject = ['$log', '$scope', '$rootScope', '$window'];
