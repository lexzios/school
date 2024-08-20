'use strict';

/**
 * @ngdoc function
 * @name lspr.training.controller:CreateInternalTrainingController
 * @description
 * # CreateInternalTrainingController
 * Controller of the Create Internal Training component
 */
lspr.training.controller('CreateInternalTrainingController', CreateInternalTrainingController);

function CreateInternalTrainingController ($log, $scope, $rootScope, lsprNav) {

	$log.info('Inside Create Internal Training Controller');

	var vm = this;

	vm.request = {
		topics: [0],
		objectives: [0]
	};

	vm.ui = {
		addTopic: function() {
    		vm.request.topics.push(vm.request.topics.length);
		},
		removeTopic: function(index) {
			vm.request.topics.splice(index , 1);
		},
		addObjective: function() {
    		vm.request.objectives.push(vm.request.objectives.length);
		},
		removeObjective: function(index) {
			vm.request.objectives.splice(index , 1);
		},
		formatByte: ByteUtil.size
	};

}

CreateInternalTrainingController.$inject = ['$log', '$scope', '$rootScope', 'lsprNav'];
