'use strict';

/**
 * @ngdoc function
 * @name lspr.employee.controller:CreateExitController
 * @description
 * # CreateExitController
 * Controller of the create exit component
 */
lspr.employee.controller('CreateExitController', CreateExitController);

function CreateExitController ($log, $scope, $rootScope) {

	var vm = this;
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
		formatByte: ByteUtil.size
	};
	$log.info('Inside create exit Controller');

}

CreateExitController.$inject = ['$log', '$scope', '$rootScope'];
