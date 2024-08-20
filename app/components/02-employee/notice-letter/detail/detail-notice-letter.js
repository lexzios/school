'use strict';

/**
 * @ngdoc function
 * @name lspr.employee.controller:DetailNoticeLetterController
 * @description
 * # DetailNoticeLetterController
 * Controller of the DetailNoticeLetter component
 */
lspr.employee.controller('DetailNoticeLetterController', DetailNoticeLetterController);

function DetailNoticeLetterController ($log, $scope, $rootScope, $routeParams) {

	var vm = this;

	vm.param = {
		employee: $routeParams.e
	};

	$log.info('Inside DetailNoticeLetter Controller');

	vm.form = {
		employee: vm.param.employee || ''
	};

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

	$scope.$watch('vm.form.employee', function() {
		$log.info(vm.form.employee.length);
	});

}

DetailNoticeLetterController.$inject = ['$log', '$scope', '$rootScope', '$routeParams'];
