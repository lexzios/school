'use strict';

/**
 * @ngdoc function
 * @name lspr.dashboard.controller:SettingsController
 * @description
 * # SettingsController
 * Controller of the Settings component
 */
lspr.dashboard.controller('SettingsController', SettingsController);

function SettingsController ($log, $scope, $rootScope, Restangular, lsprAPI, $location, ngTableParams, $filter) {

	var vm = this;

	vm.mockupData = {
		departments: [
		    {department: 'Finance', location: 'Campus A'},
			{department: 'Human Resource', location: 'Campus B'},
			{department: 'IT', location: 'Campus C'}
		],
		locations: [
			{location: 'Campus A', address: 'Sudirman'},
			{location: 'Campus B', address: 'Kebon Jeruk'},
			{location: 'Campus C', address: 'Gatot Subroto'}
		],
		classifications: [
			{classification: 'Maintenance Crew'},
			{classification: 'Security'},
			{classification: 'Lecturer'}
		],
		levels: [
			{level: 'Staff'},
			{level: 'Managerial'},
			{level: 'Top Managerial'},
		]
	};

	var activeSettings = '' || $location.search().a;

	vm.ui = {
		notification: false,
		tab: {
			items: [
				{name: 'department', collapsed: false},
				{name: 'location', collapsed: true},
				{name: 'classification', collapsed: true},
				{name: 'level', collapsed: true},
			],
			toggle: function(tab) {
				var allCollapsed = true;
				this.items.forEach(function(item) {
					if(tab === item.name) {
						item.collapsed = !item.collapsed;
						allCollapsed = item.collapsed;
					}else {
						item.collapsed = true;
					}
				});
				if(allCollapsed) {
					this.items[0].collapsed = true;
				}
			}
		},
		tableDepartmentParams: new ngTableParams(
  		  {
  			  page: 1,
  			  count: 10,
  			  filter: {
  				  department: '',
  				  location: ''
  			  },
  			  sorting: {
  				  department: 'asc',
  				  location: 'asc'
  			  }
  		  },
  		  {
  			  total: vm.mockupData.departments.length, // length of data
  			  getData: function ($defer, params) {

  				   var filteredData = params.filter() ? $filter('filter')(vm.mockupData.departments, params.filter()) : vm.mockupData.departments;
  				   var sortedData = params.sorting() ? $filter('orderBy')(filteredData, params.orderBy()) : filteredData;

  				   vm.departmentData = sortedData.slice((params.page() - 1) * params.count(), params.page() * params.count());

  				   params.total(sortedData.length);
  				   $defer.resolve(vm.departmentData);
  			  }
  		  }
  	  ),
	  tableLocationParams: new ngTableParams(
		{
			page: 1,
			count: 10,
			filter: {
				location: '',
				address: ''
			},
			sorting: {
				location: 'asc',
				address: 'asc'
			}
		},
		{
			total: vm.mockupData.locations.length, // length of data
			getData: function ($defer, params) {

				 var filteredData = params.filter() ? $filter('filter')(vm.mockupData.locations, params.filter()) : vm.mockupData.locations;
				 var sortedData = params.sorting() ? $filter('orderBy')(filteredData, params.orderBy()) : filteredData;

				 vm.locationData = sortedData.slice((params.page() - 1) * params.count(), params.page() * params.count());

				 params.total(sortedData.length);
				 $defer.resolve(vm.locationData);
			}
		}
	),
	tableClassificationParams: new ngTableParams(
	  {
		  page: 1,
		  count: 10,
		  filter: {
			  classification: ''
		  },
		  sorting: {
			  classification: 'asc'
		  }
	  },
	  {
		  total: vm.mockupData.classifications.length, // length of data
		  getData: function ($defer, params) {

			   var filteredData = params.filter() ? $filter('filter')(vm.mockupData.classifications, params.filter()) : vm.mockupData.classifications;
			   var sortedData = params.sorting() ? $filter('orderBy')(filteredData, params.orderBy()) : filteredData;

			   vm.classificationData = sortedData.slice((params.page() - 1) * params.count(), params.page() * params.count());

			   params.total(sortedData.length);
			   $defer.resolve(vm.classificationData);
		  }
	  }
  	),
	tableLevelParams: new ngTableParams(
	  {
		  page: 1,
		  count: 10,
		  filter: {
			  level: ''
		  },
		  sorting: {
			  level: 'asc'
		  }
	  },
	  {
		  total: vm.mockupData.levels.length, // length of data
		  getData: function ($defer, params) {

			   var filteredData = params.filter() ? $filter('filter')(vm.mockupData.levels, params.filter()) : vm.mockupData.levels;
			   var sortedData = params.sorting() ? $filter('orderBy')(filteredData, params.orderBy()) : filteredData;

			   vm.levelData = sortedData.slice((params.page() - 1) * params.count(), params.page() * params.count());

			   params.total(sortedData.length);
			   $defer.resolve(vm.levelData);
		  }
	  }
  	),
	};

	if(activeSettings) {
		vm.ui.tab.toggle(activeSettings);
	};

	var Resource = {
		department: Restangular.all(lsprAPI.route.company.department),
		location: Restangular.all(lsprAPI.route.company.location),
		classification: Restangular.all(lsprAPI.route.company.classification),
		level: Restangular.all(lsprAPI.route.company.level)
	};

	// Resource.department.getList().then(function(res) {
	//  	vm.departments = res;
	// });

	var _department = {
		add: function() {
			var request = {
				dep_name: vm.dep_name
			}
			Resource.department.post(request).then(function(res) {
				console.log("department added");
			})
		}
	};

	var _location = {
		add: function() {
			var request = {
				loc_name: vm.loc_name,
				address: vm.address
			}
			Resource.location.post(request).then(function(res) {
				console.log("location added");
			})
		}
	};

	var _classification = {
		add: function() {
			var request = {
				class: vm.class
			}
			Resource.classification.post(request).then(function(res) {
				console.log("class added");
			})
		}
	};

	var _level = {
		add: function() {
			var request = {
				level: vm.level
			}
			Resource.level.post(request).then(function(res) {
				console.log("level added");
			})
		}
	};

	vm.department = _department;
	vm.location = _location;
	vm.jobClassification = _classification;
	vm.jobLevel = _level;
}

SettingsController.$inject = ['$log', '$scope', '$rootScope', 'Restangular', 'lsprAPI', '$location', 'ngTableParams', '$filter'];
