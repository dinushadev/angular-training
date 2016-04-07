'use strict';

/* Controllers */

angular.module('myApp')
.controller('LoginCtrl', ['$location','$scope','LoginSvc', function($location,$scope,LoginSvc) {
	$scope.user ={};

	$scope.login = function(){

		
		LoginSvc.login($scope.user,function(responce){
			if(responce.success){
				$location.path('home');
			}else{
				console.log(responce.message);
			}
		});
	}

  }]);
  

