'use strict';



angular.module('myApp', [
  'ui.router'
]).
config( function($stateProvider,$urlRouterProvider) {
  

  $stateProvider.state('login',{
  	url:'/login',
  	templateUrl:'partials/login.html'
  	  })
  .state('home',{
  	 url:"/home",
  	 templateUrl:"partials/home.html",
  	controller:'CarCtrl'

  })
  .state('about',{
  	url:"home",
  	templateUrl:"partials/about.html"
  });


  $urlRouterProvider.otherwise("/login");

});

