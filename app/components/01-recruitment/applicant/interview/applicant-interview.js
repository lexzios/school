'use strict';

/**
 * @ngdoc function
 * @name lspr.recruitment.controller:ApplicantInterviewController
 * @description
 * # ApplicantInterviewController
 * Controller of the ApplicantInterview component
 */
lspr.recruitment.controller('ApplicantInterviewController', ApplicantInterviewController);

function ApplicantInterviewController ($log, $scope, $rootScope, $routeParams) {

	var vm = this;

	vm.selectedDate = $routeParams.date;

	$log.info('Inside ApplicantInterview Controller');

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

ApplicantInterviewController.$inject = ['$log', '$scope', '$rootScope', '$routeParams'];
