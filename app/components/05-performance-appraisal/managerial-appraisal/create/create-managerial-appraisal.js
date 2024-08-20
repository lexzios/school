'use strict';

/**
 * @ngdoc function
 * @name lspr.CreateManagerialAppraisal.controller:CreateManagerialAppraisalController
 * @description
 * # CreateManagerialAppraisalSettingsController
 * Controller of the CreateManagerialAppraisal component
 */
lspr.performanceAppraisal.controller('CreateManagerialAppraisalController', CreateManagerialAppraisalController);

function CreateManagerialAppraisalController ($log, $scope, $filter, $rootScope) {

	var vm = this;

	$log.info('Inside CreateManagerialAppraisal Controller');

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
  		        dateFrom: {
  					model: $filter('date')(Date.now(),'dd-MM-yyyy'),
  					isOpen: false,
  					valuationDatePickerOpen: function ($event) {
  							if ($event) {
  									$event.preventDefault();
  									$event.stopPropagation();
  							}
  							vm.closeAllDatePickers('dateFrom');
  							vm.ui.datePickers.dateFrom.isOpen = vm.ui.datePickers.dateFrom.isOpen ? false : true;
  					}
  				},
  				dateTo: {
  					model: $filter('date')(Date.now(),'dd-MM-yyyy'),
  					isOpen: false,
  					valuationDatePickerOpen: function ($event) {
  							if ($event) {
  									$event.preventDefault();
  									$event.stopPropagation();
  							}
  							vm.closeAllDatePickers('dateTo');
  							vm.ui.datePickers.dateTo.isOpen = vm.ui.datePickers.dateTo.isOpen ? false : true;
  					}
  				},
  				dateWork: {
  					model: $filter('date')(Date.now(),'dd-MM-yyyy'),
  					isOpen: false,
  					valuationDatePickerOpen: function ($event) {
  							if ($event) {
  									$event.preventDefault();
  									$event.stopPropagation();
  							}
  							vm.closeAllDatePickers('dateStartWorking');
  							vm.ui.datePickers.dateWork.isOpen = vm.ui.datePickers.dateWork.isOpen ? false : true;
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

CreateManagerialAppraisalController.$inject = ['$log', '$scope', '$filter', '$rootScope'];
