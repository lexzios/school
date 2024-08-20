'use strict';

/**
 * @ngdoc function
 * @name lspr.attendance.controller:CreateLeaveWithoutPayController
 * @description
 * # CreateLeaveWithoutPayController
 * Controller of the Create Leave Without Pay Permission component
 */
lspr.attendance.controller('CreateLeaveWithoutPayController', CreateLeaveWithoutPayController);

function CreateLeaveWithoutPayController ($log, $scope, $rootScope, $filter, lsprNav) {

	var vm = this;

	$log.info('Inside Create Leave Without Pay Permission Controller');

  vm.attachment = {
		files: [],
		upload: function(files) {
			for (var i = 0; i < files.length; i++) {
				var file = files[i];
				this.files.push(file);
			}
		},
		remove: function(files) {
			vm.attachment.files.splice(files, 1);
		},
		removeAll: function() {
			vm.attachment.files = [];
		}
	};


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
				},
				dateStartWorking: {
					model: $filter('date')(Date.now(),'dd-MM-yyyy'),
					isOpen: false,
					valuationDatePickerOpen: function ($event) {
							if ($event) {
									$event.preventDefault();
									$event.stopPropagation();
							}
							vm.closeAllDatePickers('dateStartWorking');
							vm.ui.datePickers.dateStartWorking.isOpen = vm.ui.datePickers.dateStartWorking.isOpen ? false : true;
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

CreateLeaveWithoutPayController.$inject = ['$log', '$scope', '$rootScope', '$filter', 'lsprNav'];
