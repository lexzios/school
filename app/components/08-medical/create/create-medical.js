'use strict';

/**
 * @ngdoc function
 * @name lspr.medical.controller:CreateMedicalController
 * @description
 * # CreateMedicalController
 * Controller of the Create Medical component
 */
lspr.medical.controller('CreateMedicalController', CreateMedicalController);

function CreateMedicalController ($log, $scope, $rootScope, lsprNav) {

	$log.info('Inside CreateMedicalController Controller');

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
}

CreateMedicalController.$inject = ['$log', '$scope', '$rootScope', 'lsprNav'];
