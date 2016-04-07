'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp')
    .value('carList', [{
        id: 1,
        make: 'Toyota',
        condition: 'Brand New',
        model: 'Alion',
        price: '500000'
    }, {
        id: 2,
        make: 'Toyota',
        model: 'Corolla',
        condition: 'Brand New',
        price: '440000'
    }, {
        id: 3,
        make: 'HONDA',
        model: 'Civc EK3',
        condition: 'Used',
        price: '640000'
    }, {
        id: 4,
        make: 'HONDA',
        model: 'FIT',
        condition: 'Brand New',
        price: '360000'
    }, {
        id: 5,
        make: 'Mazda',
        model: '3',
        condition: 'Used',
        price: '450000'
    }])



.value('identity', {
})



.value('makeList', [{
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
}, {
    name: "Ferrari",
    like: true
}]);
