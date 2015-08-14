'use strict';

angular.module('splash').controller('PersonalController', ['$scope',
  function ($scope) {
    $scope.location = 'welcome';

  	$('.life-circle').hover(function() {
      if(window.innerWidth >= 800) {
    		$(this).addClass('md-whiteframe-z4').animate({
    			'width': 170,
    			'height': 170,
    			'border-radius': 85,
    			'margin-top': -5,
          'background-size': '190px'
    		}, 250).find('h3').animate({
    			'margin-top': 72
    		}, 250);
      }
  	}, function() {
      if(window.innerWidth >= 800) {
    		$(this).removeClass('md-whiteframe-z4').animate({
    			'width': 160,
    			'height': 160,
    			'border-radius': 80,
    			'margin-top': 0,
          'background-size': '180px'
    		}, 250).find('h3').animate({
    			'margin-top': 68
    		}, 250);
      }
  	});

    $scope.setLocation = function(location) {
      $scope.location = location;
    };
  }
]);
