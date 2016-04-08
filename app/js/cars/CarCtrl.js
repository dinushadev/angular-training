'use strict';

/* Controllers */

angular.module('myApp')
    .controller('CarCtrl', ['$scope', 'CarSvc', function($scope, CarSvc) {
        $scope.car = {};
        $scope.isEditMood = false;
        $scope.ready = false;
       // $scope.carList =[];
      //  $scope.carList =CarSvc.getAllCars();
      // $scope.carList =[];
      
          $scope.carList =CarSvc.getAllCars();
          $scope.ready = true;
        //  $scope.$apply();
         
          $scope.addNewCar = function() {

            console.log($scope.car);

             CarSvc.addCar($scope.car, function(responce) {
                if (responce.success) {
                    console.log(responce.message);
                    $scope.car ={};
                     $scope.isEditMood = false;
                } else {
                    console.log(responce.message);
                }
            });
        };

      
    }]);
