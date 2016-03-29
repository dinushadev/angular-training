'use strict';

/* Services */


angular.module('myApp').service('AddCarSvc',function($http,carList) {


  return {
    addCar: function(newCar,callback) {
    	 console.log("Make: %s  Model:%s  Price:%s",newCar.make,newCar.model,newCar.price);
       newCar.id = carList.length+1;
       carList.push(newCar);
    	  var response = { success: true };
                
               if(!response.success) {
                    response.message = 'Username or password is incorrect';
                }
                callback(response);
    },
    getAllCars: function(){
      return carList;
    },

    getCarById: function(id){
       return carList[id-1];
    },

    deleteCarById: function(id){
          carList =carList.slice(id-1, 1);
    }
  }
});