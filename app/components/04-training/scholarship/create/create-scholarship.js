'use strict';

/**
 * @ngdoc function
 * @name lspr.training.controller:CreateTrainingScholarshipController
 * @description
 * # CreateTrainingScholarshipController
 * Controller of the Create Training Scholarship component
 */
lspr.training.controller('CreateTrainingScholarshipController', CreateTrainingScholarshipController);

function CreateTrainingScholarshipController ($log, $scope, $rootScope, lsprNav) {

	var vm = this;

	$log.info('Inside Create Training Scholarship Controller');

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

CreateTrainingScholarshipController.$inject = ['$log', '$scope', '$rootScope', 'lsprNav'];
