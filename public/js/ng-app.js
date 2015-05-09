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
     .state('suggestions', {
        url : '/suggestions?mood&price&drinks&transportation&partysize&proximity',
        templateUrl : 'partials/suggestions.html',
        controller : 'SuggestionCtrl'
     })
     .state('about', {
     	url : '/about',
     	templateUrl : 'partials/about.html',
     	controller : 'MainCtrl'
     })
	;

     $urlRouterProvider.otherwise ('/');

}])

/*
.controller ('MainCtrl', ['$scope', 'staticFactory', function ($scope, staticFactory) {
    $scope.team = staticFactory.team;
    $scope.slides = staticFactory.slides;
}])*/
.controller ('MainCtrl', ['$scope', '$state', function ($scope, $state) {
    
    $scope.suggestions = function () {
        var mood = $('#mood-slider')[0].value;
        var price = $('#price-slider')[0].value;
        var drinks = $('#drinks-slider')[0].value;
        var transportation = $('#transportation-slider')[0].value;
        var partysize = $('#partysize-slider')[0].value;
        var proximity = $('#proximity-slider')[0].value;
        $state.go('suggestions', {
                'mood':mood,
                'price':price,
                'drinks':drinks,
                'transportation' : transportation,
                'partysize': partysize,
                'proximity': proximity
            }
            );    
    }
}])

.factory('PlaceFactory', function() {
    var res = {};

    var r0 = {
        'name' : 'Incahoots',
        'img' : 'http://clubworld360.com/data/venues/1442/full_InCahoots%20-%20Copy.jpg'
    };

    var r1 = {
        'name' : 'Tavern',
        'img' : 'https://bakaresd.files.wordpress.com/2010/02/tavern1.jpg'
    };

    var r2 = {
        'name' : 'McDonalds',
        'img' : 'http://www.burgerbusiness.com/wp-content/uploads/McD_LovinIt.png'
    };
    
    var r3 = {
        'name' : 'Bowling',
        'img' : 'http://1.bp.blogspot.com/-2QBgwLy97U4/U8O1qlCVbKI/AAAAAAAAAas/sxb_QRb1efo/s1600/strike_400_wht_7927.png'
    }; 

    var r4 = {
        'name' : 'Surfing',
        'img' : 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRUHOXTjRq50CC8PbJ8t2w3lUOF9_-LsULBJSmvbc-vH6sE7jrx4TIZhB7i'
    }; 

    var r5 = {
        'name' : 'Brewskis',
        'img' : 'http://www.brewskissd.com/images/brewskis.png'
    }; 

    var r6 = {
        'name' : 'PB shore club',
        'img' : 'http://www.sandiegan.com/images/Restaurants/pbshoreclub.jpg'
    }; 
var placeArr = [];
placeArr.push(r0);
placeArr.push(r1);
placeArr.push(r2);
placeArr.push(r3);
placeArr.push(r4);
placeArr.push(r5);
placeArr.push(r6);

res['places'] = placeArr;

    return res;
})

.controller('SuggestionCtrl', ['$scope', '$state', '$stateParams', 'PlaceFactory',function ($scope, $state, $stateParams, placeFactory) {
    var total = 0;
    var mood = parseInt($stateParams['mood']);
    var price = parseInt($stateParams['price']);
    var drinks = parseInt($stateParams['drinks']);
    var transportation = parseInt($stateParams['transportation']);
    var partysize = parseInt($stateParams['partysize']);
    var proximity = parseInt($stateParams['proximity']);

    total = mood + price + drinks + transportation + partysize + proximity;

    if(total>26) {
        $scope.places = placeFactory['places'].slice(0,3);
    } else {
        $scope.places = placeFactory['places'].slice(3,6);
    }

    console.log(total);
 }])
;
