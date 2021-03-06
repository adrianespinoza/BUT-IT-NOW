angular.module('shoppingCartApp.cartDashboard', [
  'ngRoute'
]).config([
  '$stateProvider',
  function ($stateProvider) {
    'use strict';
    $stateProvider.state('app.cartDashboard', {
      url: '',
      views: {
        'content@': {
          controller: 'shoppingCart.CartDashboardController',
          templateUrl: 'modules/shoppingCart/cart-dashboard/cart-dashboard.template.html',
          resolve: {
            shoppingCartList: [
              function () {
                var items = [
                  {title: 'TV', quantity: 1, price: 500},
                  {title: 'Radio', quantity: 1, price: 80}
                ];

                return items;
              }
            ],
            offeredProductsList: [
              function () {
                var items = [
                  {title: 'TV', price: 500},
                  {title: 'Radio', price: 80},
                  {title: 'Microwave', price: 150},
                  {title: 'ChromeCast', price: 70}
                ];

                return items;
              }
            ]
          }
        }
      }
    });
  }
]);
