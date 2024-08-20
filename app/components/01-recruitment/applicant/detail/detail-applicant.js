'use strict';

/**
 * @ngdoc function
 * @name lspr.recruitment.controller:DetailApplicantController
 * @description
 * # DetailApplicantController
 * Controller of the DetailApplicant component
 */
lspr.recruitment.controller('DetailApplicantController', DetailApplicantController);

function DetailApplicantController ($log, $scope, $rootScope) {

	var vm = this;

	$log.info('Inside DetailApplicant Controller');

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

}

DetailApplicantController.$inject = ['$log', '$scope', '$rootScope'];
