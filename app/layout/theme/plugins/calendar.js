var Calendar = function() {


    return {
        //main function to initiate the module
        init: function() {
            Calendar.initCalendar();
        },

        initCalendar: function() {

            if (!jQuery().fullCalendar) {
                return;
            }

            var date = new Date();
            var d = date.getDate();
            var m = date.getMonth();
            var y = date.getFullYear();

            var h = {};

            if (Metronic.isRTL()) {
                if ($('#calendar').parents(".portlet").width() <= 720) {
                    $('#calendar').addClass("mobile");
                    h = {
                        right: 'title, prev, next',
                        center: '',
                        left: 'agendaDay, agendaWeek, month, today'
                    };
                } else {
                    $('#calendar').removeClass("mobile");
                    h = {
                        right: 'title',
                        center: '',
                        left: 'agendaDay, agendaWeek, month, today, prev,next'
                    };
                }
            } else {
                if ($('#calendar').parents(".portlet").width() <= 720) {
                    $('#calendar').addClass("mobile");
                    h = {
                        left: 'title, prev, next',
                        center: '',
                        right: 'today,month,agendaWeek,agendaDay'
                    };
                } else {
                    $('#calendar').removeClass("mobile");
                    h = {
                        left: 'title',
                        center: '',
                        right: 'prev,next,today,month,agendaWeek,agendaDay'
                    };
                }
            }

            var addEvent = function(title) {
                title = title.length === 0 ? "Untitled Event" : title;
                var html = $('<div class="external-event label label-default">' + title + '</div>');
                jQuery('#event_box').append(html);
            };

            $('#event_add').unbind('click').click(function() {
                var title = $('#event_title').val();
                addEvent(title);
            });

            //predefined events
            $('#event_box').html("");
            addEvent("My Event 1");
            addEvent("My Event 2");
            addEvent("My Event 3");
            addEvent("My Event 4");
            addEvent("My Event 5");
            addEvent("My Event 6");

            var pad = function (n, width, z) {
                z = z || '0';
                n = n + '';
                return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
            };

            $('#calendar').fullCalendar('destroy'); // destroy the calendar
            $('#calendar').fullCalendar({ //re-initialize the calendar
                defaultView: 'month', // change default view with available options from http://arshaw.com/fullcalendar/docs/views/Available_Views/ 
                dayClick: function(date) {

                    var day = date._d.getDate();
                    var month = date._d.getMonth()+1;
                    var year = date._d.getFullYear();

                    dateFormat = pad(day, 2) + pad(month, 2) + pad(year, 4);

                    window.open("/recruitment/interview/");
                },
                eventClick: function(calEvent, jsEvent, view) {
                    window.open("/recruitment/interview/schedule/IHR00024/");
                },
                events: [{
                    title: 'Interview title 1',
                    start: new Date(y, m, 1),
                    backgroundColor: Metronic.getBrandColor('yellow')
                }, {
                    title: 'Interview title 2',
                    start: new Date(y, m, d - 5),
                    end: new Date(y, m, d - 2),
                    backgroundColor: Metronic.getBrandColor('green')
                }, {
                    title: 'Interview title 3',
                    start: new Date(y, m, d - 3, 16, 0),
                    allDay: false,
                    backgroundColor: Metronic.getBrandColor('red')
                }, {
                    title: 'Interview title 4',
                    start: new Date(y, m, d + 4, 16, 0),
                    allDay: false,
                    backgroundColor: Metronic.getBrandColor('green')
                }, {
                    title: 'Interview title 5',
                    start: new Date(y, m, d, 10, 30),
                    allDay: false,
                }, {
                    title: 'Interview title 6',
                    start: new Date(y, m, d, 12, 0),
                    end: new Date(y, m, d, 14, 0),
                    backgroundColor: Metronic.getBrandColor('grey'),
                    allDay: false,
                }, {
                    title: 'Interview title 6',
                    start: new Date(y, m, d + 1, 19, 0),
                    end: new Date(y, m, d + 1, 22, 30),
                    backgroundColor: Metronic.getBrandColor('purple'),
                    allDay: false,
                }, {
                    title: 'Interview title 7',
                    start: new Date(y, m, 28),
                    end: new Date(y, m, 29),
                    backgroundColor: Metronic.getBrandColor('yellow'),
                    url: 'http://google.com/',
                }]
            });

        }

    };

}();