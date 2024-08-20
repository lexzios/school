'use strict';

/**
 * @ngdoc function
 * @name lspr.recruitment.controller:CreateResultController
 * @description
 * # CreateResultController
 * Controller of the CreateResult component
 */
lspr.recruitment.controller('CreateResultController', CreateResultController);

function CreateResultController ($log, $scope, $rootScope) {

	var vm = this;

	$log.info('Inside CreateResult Controller');

	//TODO display tab based on user role
	vm.ui = {
		tab: {
			items: [
				{name: 'User Interview Result', collapsed: true, content: '/components/01-recruitment/interview/result/create/user-interview-result.html'},
				{name: 'HR Interview Result', collapsed: false, content: '/components/01-recruitment/interview/result/create/hr-interview-result.html'},
			],
			toggle: function(tab) {
				this.items.forEach(function(item) {
					if(tab === item.name) {
						item.collapsed = !item.collapsed;
					}else {
						item.collapsed = true;
					}
				});
			}
		}
	};

}

CreateResultController.$inject = ['$log', '$scope', '$rootScope'];
