'use strict';

/* Directives */




angular.module('myApp').
directive('dnCarMakeSurvey', function() {
    return {
        restrict: 'E',
        templateUrl: 'js/survey/car-make-survey.html',
        controller: function($scope,makeList) {
            $scope.makeList = makeList;
        }
    }
});
