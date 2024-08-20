'use strict';

/**
 * @ngdoc function
 * @name lspr.grievance.controller:CreateSubmissionsController
 * @description
 * # CreateSubmissionsController
 * Controller of the Grievance & Idea Handling submission component
 */
lspr.grievance.controller('CreateSubmissionsController', CreateSubmissionsController);

function CreateSubmissionsController ($log, $scope, $rootScope, lsprNav) {

	var vm = this;

	$log.info('Inside CreateSubmissionsController');

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

CreateSubmissionsController.$inject = ['$log', '$scope', '$rootScope', 'lsprNav'];
