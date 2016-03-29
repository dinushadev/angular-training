'use strict';

/* Services */


angular.module('myApp').service('LoginSvc',function($http) {
   
  	 

  return {
    login: function(user,callback) {
    	 console.log("email: %s  password:%s",user.email,user.password);
    	  var response = { success: user.email === 'test@gmail.com' && user.password === 'a' };
                
               if(!response.success) {
                    response.message = 'Username or password is incorrect';
                }
                callback(response);
    }
  }
});