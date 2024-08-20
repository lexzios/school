'use strict';

/**
 * @ngdoc function
 * @name lspr.BusinessTrip.controller:DetailBusinessTripController
 * @description
 * # DetailBusinessTripController
 * Controller of the DetailBusinessTripController component
 */
lspr.training.controller('DetailBusinessTripController', DetailBusinessTripController);

function DetailBusinessTripController ($log, $scope, $filter, $rootScope) {

	var vm = this;

	$log.info('Inside DetailBusinessTrip List Controller');

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
 			}
 		}
 	};

 	vm.closeAllDatePickers = function(exclude){
 		for (var key in vm.ui.datePickers) {
 			if (exclude != key) vm.ui.datePickers[key].isOpen = false;
 		}
 	};
}

DetailBusinessTripController.$inject = ['$log', '$scope', '$filter', '$rootScope'];
