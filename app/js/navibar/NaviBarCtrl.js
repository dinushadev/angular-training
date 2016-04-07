'use strict';

/* Controllers */

angular.module('myApp')
.controller('NavBarCtrl', ['$scope','$rootScope','identity', function($scope,$rootScope, identity) {
	console.log( identity.username);
	$scope.identity = identity;
	identity.username = 'test';
	if($rootScope.identity){
		$scope.userName =  $rootScope.identity.username;
		console.log( $rootScope.identity.username);	
	}
	
	 $scope.appTitle = 'Teloran';
  }]);
  

