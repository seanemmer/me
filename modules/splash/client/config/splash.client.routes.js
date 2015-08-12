'use strict';

// Setting up route
angular.module('core').config(['$stateProvider',
  function ($stateProvider) {

    // Home state routing
    $stateProvider
      .state('personal', {
        url: '/personal',
        templateUrl: 'modules/splash/views/personal.client.view.html'
      })
      .state('projects', {
        url: '/projects',
        templateUrl: 'modules/splash/views/projects.client.view.html'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'modules/splash/views/contact.client.view.html'
      });
  }
]);
