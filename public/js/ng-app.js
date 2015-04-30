'use strict';


// Declare app level module which depends on views, and components
angular.module('nightrouletteApp', [
  'ui.router',
  'ui.bootstrap',
  'nightrouletteApp.landingpage',
])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $stateProvider
     .state('home', {
     	url : '/',
     	templateUrl : 'partials/landingpage.html',
     	controller : 'MainCtrl'
     })   
     .state('services', {
     	url : '/services',
     	templateUrl : 'partials/services.html',
     	controller : 'MainCtrl'
     })
     .state('about', {
     	url : '/about',
     	templateUrl : 'partials/about.html',
     	controller : 'MainCtrl'
     })
	;

     $urlRouterProvider.otherwise ('/');

}])

.controller ('MainCtrl', ['$scope', 'staticFactory', function ($scope, staticFactory) {
	$scope.team = staticFactory.team;
	$scope.slides = staticFactory.slides;
}])

;
