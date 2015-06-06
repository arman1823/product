'use strict';


angular.module('adminpanel').controller('adminpanelHomeController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;


	}
]);
