'use strict';

/**
 * @ngdoc function
 * @name lspr.attendance.controller:DetailLeaveWithoutPayController
 * @description
 * # DetailLeaveWithoutPayController
 * Controller of the Detail Leave Without Pay component
 */
 lspr.attendance.controller('DetailLeaveWithoutPayController', DetailLeaveWithoutPayController);

 function DetailLeaveWithoutPayController ($log, $scope, $rootScope, $filter, lsprNav) {

 	var vm = this;

 	$log.info('Inside Detail Leave Without Pay Controller');

 	vm.ui = {
 		datePickerConfig: {
 			format: 'dd-MM-yyyy',
 			minDate: new Date(),
 			maxDate: '',
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

 DetailLeaveWithoutPayController.$inject = ['$log', '$scope', '$rootScope', '$filter', 'lsprNav'];
