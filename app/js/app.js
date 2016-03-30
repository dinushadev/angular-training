'use strict';



angular.module('myApp', [
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {templateUrl: 'partials/home.html'});
  $routeProvider.when('/about', {templateUrl: 'partials/about.html', controller: 'MyCtrl2'});
   $routeProvider.when('/login', {templateUrl: 'partials/login.html'});
  $routeProvider.otherwise({redirectTo: '/login'});
}]);

