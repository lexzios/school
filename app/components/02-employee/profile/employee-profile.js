'use strict';

/**
 * @ngdoc function
 * @name lspr.employee.controller:EmployeeProfileController
 * @description
 * # EmployeeController
 * Controller of the Employee Profile component
 */
lspr.employee.controller('EmployeeProfileController', EmployeeProfileController);

function EmployeeProfileController ($log, $scope, $rootScope, $location) {

	var inactive = $location.search().inactive;

	var vm = this;

	vm.profile = {};
	vm.profile.sex = 0;
	vm.profile.maritalStatus = 2;
	vm.profile.idType = 2;

	vm.childRows = [0];
	vm.loanRows = [0];

	vm.ui = {
		employee: {
			inactive: inactive ? true : false
		},
		notification: false,
		tab: {
			items: [
				{name: 'employee data', collapsed: false, type: 0},
				{name: 'employment histories', collapsed: true, type: 1},
				{name: 'change passwords', collapsed: true, type: 2},
			],
			toggle: function(tab) {
				this.items.forEach(function(item) {
					if(tab === item.name) {
						item.collapsed = !item.collapsed;
					}else {
						item.collapsed = true;
					}
				});
			}
		},
		addChildRow: function(){
			vm.childRows.push(vm.childRows.length);
		},
		removeChildRow: function(index){
			vm.childRows.splice(index, 1);
		},
		addLoanRow: function(){
			vm.loanRows.push(vm.loanRows.length);
		},
		removeLoanRow: function(index){
			vm.loanRows.splice(index, 1);
		},
	};

	$log.debug('Inside Employee Profile Controller');

}

EmployeeProfileController.$inject = ['$log', '$scope', '$rootScope', '$location'];
