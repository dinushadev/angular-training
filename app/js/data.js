'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp')
.value('carList', [
  {id: 1, make: 'Toyota', model: 'Alion',price:'340000'}
]);

