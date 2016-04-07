'use strict';

/* Services */


angular.module('myApp').service('LoginSvc',function($http) {
   
  	 

  return {
    login: function(user,callback) {
    	 console.log("uname: %s  password:%s",user.uname,user.password);
    	  var response = { success: user.uname === 'admin' && user.password === 'admin' };
                
               if(!response.success) {
                    response.message = 'Username or password is incorrect';
                }
                callback(response);
    }
  }
});