'use strict';

angular.module('core').controller('HeaderCtrl', ['$rootScope', '$scope', '$state', '$timeout',
  function ($rootScope, $scope, $state, $timeout) {
      $scope.fabDirection = 'right';

  		$rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
  			if(toState.name === 'home') {
          $scope.showHeader = false;
        } else {
          $scope.showHeader = true;
        }
  		});
  }
]);
