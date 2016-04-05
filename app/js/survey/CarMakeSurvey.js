'use strict';

/* Directives */




angular.module('myApp').
directive('dnCarMakeSurvey', function() {
    return {
        restrict: 'E',
        templateUrl: 'js/survey/car-make-survey.html',
        controller: function($scope) {
            $scope.makeList = [{
                name: "Toyota",
                like: false
            }, {
                name: "HONDA",
                like: true
            }, {
                name: "Mazda",
                like: true
            }, {
                name: "Ford",
                like: true
            },{
    	 		name:"Ferrari",
    	 		like:true
    	 	}];
        }
    }
});
