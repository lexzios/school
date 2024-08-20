'use strict';

/**
 * @ngdoc function
 * @name lspr.training.controller:CreateExternalTrainingController
 * @description
 * Controller of the Create External Training component
 */
lspr.training.controller('CreateExternalTrainingController', CreateExternalTrainingController);

function CreateExternalTrainingController ($log, $scope, $rootScope, lsprNav) {

	$log.info('Inside Create External Training Controller');

	var vm = this;

	vm.request = {
		attachment: {
			files: [],
			upload: function(files) {
				for (var i = 0; i < files.length; i++) {
					var file = files[i];
					this.files.push(file);
				}
			},
			remove: function(files) {
				vm.request.attachment.files.splice(files, 1);
			},
			removeAll: function() {
				vm.request.attachment.files = [];
			}
		}
	};

	vm.ui = {
		formatByte: ByteUtil.size
	};
}

CreateExternalTrainingController.$inject = ['$log', '$scope', '$rootScope', 'lsprNav'];
