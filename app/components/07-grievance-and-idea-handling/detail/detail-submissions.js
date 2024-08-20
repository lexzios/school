'use strict';

/**
 * @ngdoc function
 * @name lspr.grievance.controller:DetailSubmissionsController
 * @description
 * # DetailSubmissionsController
 * Controller of the Grievance & Idea Handling submission component
 */
lspr.grievance.controller('DetailSubmissionsController', DetailSubmissionsController);

function DetailSubmissionsController ($log, $scope, $rootScope, lsprNav) {

	var vm = this;

	$log.info('Inside DetailSubmissionsController');

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

DetailSubmissionsController.$inject = ['$log', '$scope', '$rootScope', 'lsprNav'];
