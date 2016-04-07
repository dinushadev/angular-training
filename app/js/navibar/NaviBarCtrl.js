'use strict';

/* Controllers */

angular.module('myApp')
.controller('NavBarCtrl', ['$scope','identity', function($scope,identity) {
	console.log( identity.username);
	$scope.identity = identity;
	
	
	 $scope.appTitle = 'Teloran';
  }]);
  

