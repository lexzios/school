'use strict';

/**
 * @ngdoc function
 * @name lspr.training.controller:EditTrainingScholarshipController
 * @description
 * # EditTrainingScholarshipController
 * Controller of the Edit Training Scholarship component
 */
lspr.training.controller('EditTrainingScholarshipController', EditTrainingScholarshipController);

function EditTrainingScholarshipController ($log, $scope, $rootScope, lsprNav) {

	var vm = this;

	$log.info('Inside Edit Training Scholarship Controller');

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

	vm.rows = [0];

	vm.ui = {
		addRow: function() {
    		vm.rows.push(vm.rows.length);
		},
		removeRow: function(index) {
			vm.rows.splice(index , 1);
		},
		formatByte: ByteUtil.size
	};

}

EditTrainingScholarshipController.$inject = ['$log', '$scope', '$rootScope', 'lsprNav'];
