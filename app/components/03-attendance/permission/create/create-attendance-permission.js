'use strict';

/**
 * @ngdoc function
 * @name lspr.attendance.controller:CreateAttendancePermissionController
 * @description
 * # CreateAttendancePermissionController
 * Controller of the CreateAttendance Permission component
 */
lspr.attendance.controller('CreateAttendancePermissionController', CreateAttendancePermissionController);

function CreateAttendancePermissionController ($log, $scope, $rootScope) {

	var vm = this;

	$log.info('Inside CreateAttendance Permission Controller');

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
		formatByte: ByteUtil.size
	};
}

CreateAttendancePermissionController.$inject = ['$log', '$scope', '$rootScope'];
