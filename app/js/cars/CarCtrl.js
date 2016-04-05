'use strict';

/* Controllers */

angular.module('myApp')
    .controller('CarCtrl', ['$scope', 'CarSvc', function($scope, CarSvc) {
        $scope.car = {};
        $scope.carsSvc = CarSvc;
        $scope.carList = $scope.carsSvc.getAllCars();
        $scope.isEditMood = false;
        $scope.totCars =  $scope.carList.length;

        $scope.addNewCar = function() {

            console.log($scope.car);

             $scope.carsSvc.addCar($scope.car, function(responce) {
                if (responce.success) {
                    console.log(responce.message);
                    $scope.car ={};
                     $scope.isEditMood = false;
                } else {
                    console.log(responce.message);
                }
            });
        };

        $scope.editCar = function(carId) {
        	console.log('editing car id %s',carId);
            $scope.car =  $scope.carsSvc.getCarById(carId);
            $scope.isEditMood =true;
        };

        $scope.soldCar = function(carId) {
        	console.log('deleting car id %s',carId);
             $scope.carsSvc.deleteCarById(carId);
        };

        $scope.updateCar = function(){
              $scope.isEditMood = false;
              $scope.car ={};
          };
    }]);
