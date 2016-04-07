'use strict';

/* Services */


angular.module('myApp').service('LoginSvc', function($http, $rootScope, identity) {



    
        this.login = function(user, callback) {
            console.log("uname: %s  password:%s", user.uname, user.password);
            var response = {
                success: user.uname === 'test' && user.password === 'a'
            };

            if (!response.success) {
                response.message = 'Username or password is incorrect';
            } else {

                user.authtoken = 'test token'; //set test value

                identity = {
                    username: user.uname,
                    authdata: user.authtoken

                };
                 console.log('Access Globle data: '+identity.username);

                $http.defaults.headers.common['Authorization'] = 'token ' + user.authtoken;

            }
            callback(response);
        }
    });
