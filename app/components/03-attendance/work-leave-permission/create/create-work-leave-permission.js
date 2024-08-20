'use strict';

/**
 * @ngdoc function
 * @name lspr.attendance.controller:CreateWorkLeavePermissionController
 * @description
 * # CreateWorkLeavePermissionController
 * Controller of the Create Work Leave Permission component
 */
lspr.attendance.controller('CreateWorkLeavePermissionController', CreateWorkLeavePermissionController);

function CreateWorkLeavePermissionController ($log, $scope, $rootScope, $filter, lsprNav) {

	var vm = this;

	$log.info('Inside Create Work Leave Permission Controller');

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
  	  currentDate: $filter('date')(Date.now(),'dd-MM-yyyy'),
  	  timePickers: {
  		  timeLeave: new Date(),
  		  timeReturn: new Date()
  	  },
  	  timePickerConfig: {
  		  hstep: 1,
  		  mstep: 1,
  		  ismeridian: true,
  		  options: {
  			  hstep: [1, 2, 3],
  			  mstep: [1, 5, 10, 15, 25, 30]
  		  }
  	  }
    };
}

CreateWorkLeavePermissionController.$inject = ['$log', '$scope', '$rootScope', '$filter', 'lsprNav'];
