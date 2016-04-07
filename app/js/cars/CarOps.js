'use strict';

/* Directives */




angular.module('myApp').
directive('dnCarOps', function() {
    return {
        restrict: 'E',
        template: '	 <button class="btn btn-xs btn-info" ng-click="editCar(car)">Edit</button>' +
            '<button class="btn btn-xs btn-success" ng-click="soldCar(car)">Sold</button>' +
            '</div>',

    }
});
