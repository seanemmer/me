'use strict';

angular.module('splash').controller('ProjectsController', ['$scope', '$mdDialog',
	function ($scope, $mdDialog) {
		var projectData = [
			{
				'name': 'mongoose',
				'project': {
					'title': 'Mongoose-Seed',
					'color': 'red',
					'icon': 'cube',
					'description': 'Open source database seeding tool for MEAN stack.  Over 400 downloads on NPM.',
					'tech': 'Node, MongoDB, Mongoose, Async',
					'code': 'www.npmjs.com/package/mongoose-seed'
				}
			},
			{
				'name': 'justvacay',
				'project': {
					'title': 'JustVacay',
					'color': 'green',
					'icon': 'life-ring',
					'description': 'Enterprise-grade concierge platform for resort hotels.  Incorporates real-time booking, CMS, and guest-facing front-end.',
					'tech': 'Rails, Angular, Postgres, Bootstrap, Mandrill, PDFMake, Heroku',
					'code': ''
				}
			},
			{
				'name': 'electrode',
				'project': {
					'title': 'Electrode',
					'color': 'cyan',
					'icon': 'bolt',
					'description': 'Dynamic charge optimization system for electric vehicles.  Uses real-time electricity pricing to manage overnight charge cycle.',
					'tech': 'MEAN.js, Material Design, Q, Passport, Heroku',
					'code': 'www.github.com/seanemmer/electrode'
				}
			},
			{
				'name': 'clickstarter',
				'project': {
					'title': 'Clickstarter',
					'color': 'blue',
					'icon': 'mouse-pointer',
					'description': 'Proof-of-concept for donation-based crowdfunding platform.  Demonstrates social media functionality, in-app surveys, and contribution tracking.',
					'tech': 'MEAN.js, Bootstrap, AWS',
					'code': 'www.github.com/seanemmer/clickstarter'
				}
			},
			{
				'name': 'artwalker',
				'project': {
					'title': 'Artwalker',
					'color': 'pink',
					'icon': 'map-o',
					'description': 'Generates tours of Miami Art Galleries.  Utilizes Google Maps API to solve constrainted Traveling Salesman Problem.',
					'tech': 'Rails, MySQL, Google Maps',
					'code': 'www.github.com/seanemmer/artwalker'
				}
			}
		];

		$scope.projectDialog = function(project, event) {
			$(document.activeElement).blur();

			var dialogTemplate;
			var dialogLocals;

			switch(project) {
				case 'skillset':
					dialogTemplate = 'modules/splash/views/dialogs/skillset.dialog.client.view.html';
					dialogLocals = { 'project': 'null' };
					break;
				case 'more':
					dialogTemplate = 'modules/splash/views/dialogs/more-projects.dialog.client.view.html';
					dialogLocals = { 'project': 'null' };
					break;
				default:
					dialogTemplate = 'modules/splash/views/dialogs/project.dialog.client.view.html';
					dialogLocals = _.find(projectData, function(data) {
						return data.name === project;
					});
			}

			$mdDialog.show({
				controller: 'DialogController',
				templateUrl: dialogTemplate,
				targetEvent: event,
				clickOutsideToClose: false,
				locals: dialogLocals
			});
		};
	}
]);
