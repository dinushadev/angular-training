'use strict';

/* Directives */




angular.module('myApp').
  directive('dnCarList',  function() {
    return {
    	 templateUrl: 'js/cars/car-list.html'
    }
  });
