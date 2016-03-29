'use strict';

/* Controllers */

angular.module('myApp')
.controller('LoginCtrl', ['$location','$scope','LoginSvc', function($location,$scope,LoginSvc) {
	$scope.user ={};

	$scope.login = function(){

		console.log($scope.user.email);
		
		LoginSvc.login($scope.user,function(responce){
			if(responce.success){
				$location.path('view1');
			}else{
				console.log(responce.message);
			}
		});
	}

  }]);
  

