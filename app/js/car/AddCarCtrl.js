'use strict';

/* Controllers */

angular.module('myApp')
    .controller('AddCarCtrl', ['$scope', 'AddCarSvc', function($scope, AddCarSvc) {
        $scope.user = {};
        $scope.carList = AddCarSvc.getAllCars();

        $scope.addNewCar = function() {

            console.log($scope.car);

            AddCarSvc.addCar($scope.car, function(responce) {
                if (responce.success) {
                    console.log(responce.message);
                } else {
                    console.log(responce.message);
                }
            });
        };

        $scope.editCar = function(carId) {
        	console.log('editing car id %s',carId);
            $scope.car = AddCarSvc.getCarById(carId);
        };

        $scope.soldCar = function(carId) {
        	console.log('deleting car id %s',carId);
            AddCarSvc.deleteCarById(carId);
        };
    }]);
