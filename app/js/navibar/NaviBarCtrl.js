'use strict';

/* Controllers */

angular.module('myApp')
.controller('NavBarCtrl', ['$scope','identity', function($scope,$rootScope, identity) {
//	console.log( $rootScope.identity.username);
	if($rootScope.identity){
		$scope.userName =  $rootScope.identity.username;
		console.log( $rootScope.identity.username);	
	}
	
	 $scope.appTitle = 'Teloran';
  }]);
  

