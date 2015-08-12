'use strict';

angular.module('splash').controller('DialogController', ['$scope', '$mdDialog', 'project',
	function ($scope, $mdDialog, project) {
		$scope.project = project;

		$scope.closeDialog = function() {
			$mdDialog.hide();
		};
	}
]);
