'use strict';

/**
 * @ngdoc function
 * @name lspr.employee.controller:CreateNoticeLetterController
 * @description
 * # CreateNoticeLetterController
 * Controller of the CreateNoticeLetter component
 */
lspr.employee.controller('CreateNoticeLetterController', CreateNoticeLetterController);

function CreateNoticeLetterController ($log, $scope, $rootScope, $routeParams) {

	var vm = this;

	vm.param = {
		employee: $routeParams.e
	};

	$log.info('Inside CreateNoticeLetter Controller');

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

CreateNoticeLetterController.$inject = ['$log', '$scope', '$rootScope', '$routeParams'];
