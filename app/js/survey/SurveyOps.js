

angular.module('myApp').
  directive('dnSurveyOps',  function() {
    return {
         restrict: 'E',
    	 templateUrl: 'js/survey/survey-ops.html',
    	 scope : { 
            make :'='
         },
         link : function(scope,elmt, attrb,ctrl){
            
            scope.like = function(make){
                make.like = !make.like;
            };

         }
    }
  });
