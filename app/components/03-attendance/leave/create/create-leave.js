'use strict';

/**
 * @ngdoc function
 * @name lspr.attendance.controller:CreateLeaveController
 * @description
 * # CreateLeaveController
 * Controller of the Create Leave component
 */
lspr.attendance.controller('CreateLeaveController', CreateLeaveController);

function CreateLeaveController ($log, $scope, $rootScope, $filter, lsprNav) {

	var vm = this;

	$log.info('Inside Create Leave Controller');

	vm.ui = {
        datePickerConfig: {
            format: 'dd-MM-yyyy',
            minDate: new Date(),
            maxDate: '',
            valuationDate:  new Date().toLocaleDateString(),
            options: {
              showWeeks: false
            }
        },
		datePickers: {
			dateStart: {
				model: $filter('date')(Date.now(),'dd-MM-yyyy'),
				isOpen: false,
				valuationDatePickerOpen: function ($event) {
						if ($event) {
								$event.preventDefault();
								$event.stopPropagation();
						}
						vm.closeAllDatePickers('dateStart');
						vm.ui.datePickers.dateStart.isOpen = vm.ui.datePickers.dateStart.isOpen ? false : true;
				}
			},
			dateEnd: {
				model: $filter('date')(Date.now(),'dd-MM-yyyy'),
				isOpen: false,
				valuationDatePickerOpen: function ($event) {
						if ($event) {
								$event.preventDefault();
								$event.stopPropagation();
						}
						vm.closeAllDatePickers('dateEnd');
						vm.ui.datePickers.dateEnd.isOpen = vm.ui.datePickers.dateEnd.isOpen ? false : true;
				}
			}
	  }
    };
  	vm.closeAllDatePickers = function(exclude){
  		for (var key in vm.ui.datePickers) {
  	    if (exclude != key) vm.ui.datePickers[key].isOpen = false;
  		}
  	};
}

CreateLeaveController.$inject = ['$log', '$scope', '$rootScope', '$filter', 'lsprNav'];
