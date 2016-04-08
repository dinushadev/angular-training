'use strict';



angular.module('myApp', [
    'ui.router',
]).
config(function($stateProvider, $urlRouterProvider) {


    $stateProvider.state('login', {
            url: '/login',
            templateUrl: 'partials/login.html'
        })
        .state('home', {
            url: "/home",
            templateUrl: "partials/home.html",
            controller: 'CarCtrl'

        })
        .state('message',{
            url:'/message/:msg',
         //   templateUrl:"partials/message.html",
            templateUrl:function($stateParams){
                    return 'partials/message/'+$stateParams.msg+'.html';
            }

            /*,controller:function($scope, $stateParams){
                $scope.msg = $stateParams.msg;
            }*/
        })
     
        .state('about', {
            url: '/about',
            views: {

                // the main template will be placed here (relatively named)
                '': {
                    templateUrl: 'partials/about.html'
                },

                // the child views will be defined here (absolutely named)
                'title@about':{
                    template: 'Angular JS Training!'
                },
                'columnOne@about': {
                    template: 'Look I am a column!'
                },

                // for column two, we'll define a separate controller 
                'columnTwo@about': {
                    templateUrl: 'partials/about/usfulLinks.html',
                    controller: function($scope) {
                        $scope.links = [{
                                value: 'Angular Js',
                                link: 'www.angularjs.org'
                            }, {
                                value: 'React Js',
                                link: 'www.facebook.github.io/react/'
                            }

                        ];
                    }
                }
            }

        });
    

    $urlRouterProvider.otherwise("/login");

});
