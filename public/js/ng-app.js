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
        url : '/suggestions?mood&price&drinks&transportation&partysize&proximity&cursor?ch0?ch1?ch2',
        templateUrl : 'partials/suggestions.html',
        controller : 'SuggestionCtrl'
     })
     .state('about', {
     	url : '/about',
     	templateUrl : 'partials/about.html',
     	controller : 'MainCtrl'
     })
     .state('place', {
        url : '/place/:id?cursor?ch0?ch1?ch2',
        templateUrl : 'partials/placedetails.html',
        controller : 'PlacesCtrl'
     })
    .state('sorry', {
        url : '/sorry',
        templateUrl : 'partials/sorry.html',
        controller : 'SorryCtrl'
    })
    .state('letsgo', {
        url : '/letsgo?id',
        templateUrl : 'partials/letsgo.html',
        controller : 'LetsGoCtrl'
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
        'id':0,
        'name' : 'Incahoots',
        'img' : 'http://clubworld360.com/data/venues/1442/full_InCahoots%20-%20Copy.jpg',
        'tagline' : 'Yeehaw country line dancing!',
        'crowdRating': 7,
        'reviews' : ["Awesome", "hot white chicks"],
        'attending' : ["Billy", "Samantha", "Amanda", "Yolanda"],
        'tipsAndTricks': ['Line dancing lessons at 6:30 daily']
    };

    var r1 = {
        'id':1,
        'name' : 'Tavern',
        'img' : 'https://bakaresd.files.wordpress.com/2010/02/tavern1.jpg',
        'tagline' : 'Downtown SD at PB',
        'crowdRating': 8,
        'reviews' : ["Awesome", "hot white chicks"],
        'attending' : ["Billy", "Samantha", "Amanda", "Yolanda"],
        'tipsAndTricks': ['Cover is $5', 'always crowded']        
    };

    var r2 = {
        'id':2,
        'name' : 'McDonalds',
        'img' : 'http://www.burgerbusiness.com/wp-content/uploads/McD_LovinIt.png',
        'tagline' : 'This aint no Buuurger Kiing',
        'crowdRating': 2,
        'reviews' : ["Awesome", "hot white chicks"],
        'attending' : ["Billy", "Samantha", "Amanda", "Yolanda"],
        'tipsAndTricks': ['Dollar Menu']        
    };
    
    var r3 = {
        'id':3,
        'name' : 'Mira Mesa Bowling Lanes',
        'img' : 'http://1.bp.blogspot.com/-2QBgwLy97U4/U8O1qlCVbKI/AAAAAAAAAas/sxb_QRb1efo/s1600/strike_400_wht_7927.png',
        'tagline' : 'Get a 300, just like Mark Herrero',
        'crowdRating': 5,
        'reviews' : ["games", "perfect high school date", "hot moms"],
        'attending' : ["Billy", "Samantha", "Amanda", "Yolanda"],
        'tipsAndTricks': ['Half off games on Tuesdays']
    }; 

    var r4 = {
        'id':4,
        'name' : 'Surfing',
        'img' : 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRUHOXTjRq50CC8PbJ8t2w3lUOF9_-LsULBJSmvbc-vH6sE7jrx4TIZhB7i',
        'tagline' : 'Cowa bunga',
        'crowdRating': 4,
        'reviews' : ["tubular", "hot white chicks"],
        'attending' : [ "Craig","Samantha", "Amanda"],
        'tipsAndTricks': ['Waves are best after it rains', 'Go at 11am']        
    }; 

    var r5 = {
        'id':5,
        'name' : 'Brewskis',
        'img' : 'http://www.brewskissd.com/images/brewskis.png',
        'tagline' : 'Free arcade games, cheap dances at Goldfingers',
        'crowdRating': 6,
        'reviews' : ["Waitresses in bikinis, dancers in not","hot white chicks"],
        'attending' : ["Bob"],
        'tipsAndTricks': ['Show your receipt from Brewskis for cheap admission at Goldfingers']        
    }; 

    var r6 = {
        'id':6,
        'name' : 'PB shore club',
        'img' : 'http://www.sandiegan.com/images/Restaurants/pbshoreclub.jpg',
        'tagline' : 'Red bull Vodka slushis RBVs',
        'crowdRating': 4,
        'reviews' : ["I love their vodka slushis..YUM", "hot white chicks"],
        'attending' : ["Billy", "Samantha", "Amanda", "Yolanda"],
        'tipsAndTricks': ['show up before 10pm to beat line']        
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

    var cursor = $stateParams['cursor'];
    var ch0 = $stateParams['ch0'];
    var ch1 = $stateParams['ch1'];
    var ch2 = $stateParams['ch2'];


    total = mood + price + drinks + transportation + partysize + proximity;

    var places = [];

    if(total>26) {
        places = placeFactory['places'].slice(0,3);        
    } else {
        places = placeFactory['places'].slice(3,6);
    }
    

    if(ch0==='true') {
        places[0]['visited'] = 'true';
    }else {
        places[0]['visited'] = 'false';
        ch0 = 'false';
    }
    if(ch1==='true') {
        places[1]['visited'] = 'true';
    }else {
        places[1]['visited'] = 'false';
        ch1 = 'false';
    }
    if(ch2==='true') {
        places[2]['visited'] = 'true';
    }else {
        places[2]['visited'] = 'false';
        ch2='false';
    }


    if(cursor === '0') {
        places[0]['visited']='true';
        ch0='true';
    }
    if(cursor === '1') {
        places[1]['visited']='true';
        ch1='true';
    }
    if(cursor === '2') {
        places[2]['visited']='true';
        ch2='true';
    }


    console.log('cursor: '+cursor);

    places[0]['c'] = 0;
    places[1]['c'] = 1;
    places[2]['c'] = 2;

    $scope.places = places;
    $scope.ch0 = ch0;
    $scope.ch1 = ch1;
    $scope.ch2 = ch2;

    $scope.getPlaceDetails = function (id, cursor, ch0,ch1,ch2) {
        $state.go('place', {'id':id, 'cursor':cursor, 'ch0':ch0, 'ch1':ch1, 'ch2':ch2} );
    }

    if (ch1 ==='true' && ch1==='true' && ch2==='true') {
        $scope.allseen = true;
    }

    $scope.sorryPage = function () {
        $state.go('sorry');
    }

 }])


.controller('PlacesCtrl', ['$scope', '$state', '$stateParams', 'PlaceFactory',function ($scope, $state, $stateParams, placeFactory) {
    var placeId = $stateParams['id'];
    var cursor = $stateParams['cursor'];
    var ch0 = $stateParams['ch0'];
    var ch1 = $stateParams['ch1'];
    var ch2 = $stateParams['ch2'];

    $scope.cursor = cursor;
    $scope.ch0 = ch0;
    $scope.ch1 = ch1;
    $scope.ch2 = ch2;

    $scope.place = $.grep(placeFactory['places'], function(e){ return e.id == placeId; })[0];

    $scope.toggleViews = function (elem) {
        $(elem).toggleClass('hide');
    }
    $scope.showRemaining = function (cursor, ch0, ch1, ch2) {
            $state.go('suggestions', {
                'cursor': cursor,
                'ch0': ch0,
                'ch1': ch1,
                'ch2': ch2
            }
            );   
    }

    $scope.gotoLetsgo = function(id) {
        $state.go('letsgo', {
            'id':id
        })
    }
 }])

.controller('SorryCtrl', ['$scope', '$state', '$stateParams', 'PlaceFactory',function ($scope, $state, $stateParams, placeFactory) {

}])

.controller('LetsGoCtrl', ['$scope', '$state', '$stateParams', 'PlaceFactory',function ($scope, $state, $stateParams, placeFactory) {
    var placeId = $stateParams['id'];
    $scope.place = $.grep(placeFactory['places'], function(e){ return e.id == placeId; })[0];

}])


;
