'use strict';

/**
 * @ngdoc function
 * @name lspr.training.controller:PaymentDetailLoanController
 * @description
 * # PaymentDetailLoanController
 * Controller of the Payment Detail Loan component
 */
lspr.loan.controller('PaymentDetailLoanController', PaymentDetailLoanController);

function PaymentDetailLoanController ($log, $scope, $rootScope, $filter, lsprNav) {

	var vm = this;

	$log.info('Inside Training Scholarship Payment Detail Controller');

    vm.rows = [0];
    vm.datePickers = [0];
    var datePickerData = {
        model: $filter('date')(Date.now(),'dd-MM-yyyy'),
        isOpen: false
    };
    vm.datePickers[0] = datePickerData;
	vm.ui = {
		addRow: function(){
			vm.rows.push(vm.rows.length);
            //create a new datepicker
            var datePickerData = {
                model: $filter('date')(Date.now(),'dd-MM-yyyy'),
                isOpen: false
            };
            vm.datePickers.push(datePickerData);
		},
		removeRow: function(index){
			vm.rows.splice(index, 1);
            vm.datePickers.splice(index, 1);
		},
        datePickerConfig: {
            format: 'dd-MM-yyyy',
            minDate: new Date(),
            maxDate: '',
            valuationDate:  $filter('date')(Date.now(),'dd-MM-yyyy'),
            options: {
              showWeeks: false
            }
        },
        openDatePicker: function ($event, which) {
            if ($event) {
                $event.preventDefault();
                $event.stopPropagation();
            }
            vm.closeAllDatePickers(which);
            vm.datePickers[which].isOpen = vm.datePickers[which].isOpen ? false : true;
        }
	};

	vm.closeAllDatePickers = function(exclude){
		for (var i=0; i<vm.datePickers.length; i++) {
	           if (exclude != i) vm.datePickers[i].isOpen = false;
		}
	};
}

PaymentDetailLoanController.$inject = ['$log', '$scope', '$rootScope', '$filter', 'lsprNav'];
