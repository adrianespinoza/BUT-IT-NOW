angular.module('shoppingCartApp.cartDashboard').controller('shoppingCart.CartDashboardController', [
  '$scope',
  'shoppingCartList',
  function (
      $scope,
      shoppingCartList
  ) {
    'use strict';
    $scope.items = shoppingCartList;
    $scope.remove = function (index) {
      $scope.items.splice(index, 1);
    };
  }
]);
