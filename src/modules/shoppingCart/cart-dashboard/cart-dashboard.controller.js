angular.module('shoppingCartApp.cartDashboard').controller('shoppingCart.CartDashboardController', [
  '$scope',
  'shoppingCartList',
  'offeredProductsList',
  'cartService',
  function (
      $scope,
      shoppingCartList,
      offeredProductsList,
      cartService
  ) {
    'use strict';

    var addProductToItemsList = function (item, items) {
      var found = false;
      for(var i = 0; i < items.length; i++) {
        if (items[i].title === item.title) {
          items[i] = item;
          found = true;
          break;
        }
      }
      if (!found) {
        items.push(item);
      }
    };

    var cartTotalCalculation = function () {
      $scope.cartTotal = cartService.cartTotalCalculation($scope.items);
    };

    $scope.remove = function (index) {
      $scope.items.splice(index, 1);
    };

    $scope.onChangeOfferedProduct = function () {
      $scope.offeredProductSelected.quantity = undefined;
    };

    $scope.addProduct = function (form) {
      if (!form.$invalid) {
        var item = angular.copy($scope.offeredProductSelected);
        addProductToItemsList(item, $scope.items);
        $scope.offeredProductSelected = undefined;
      }
    };

    var init = function () {
      $scope.items = shoppingCartList;
      $scope.offeredProductSelected = undefined;
      $scope.offeredProducts = offeredProductsList;
      cartTotalCalculation();
    };
    init();
  }
]);
