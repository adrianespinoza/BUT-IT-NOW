angular.module('shoppingCartApp.services').factory('cartService', [
  function () {
    'use strict';

    var cartService = {};

    cartService.cartTotalCalculation = function (items) {
      var total = 0;
      for(var i = 0; i < items.length; i++) {
        total += items[i].price * items[i].quantity;
      }

      return total;
    };

    return cartService;
  }
]);