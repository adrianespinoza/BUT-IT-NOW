(function () {

  'use strict';

  angular
    .module('shoppingCartApp')
    .controller('shoppingCart.AppController', [
      '$scope',
      '$state',
      function (
        $scope,
        $state
      ) {
        console.log('app controlled called');
        $scope.isDashboardPage = function () {
          return $state.is('app.mainDashboard');
        };
      }
    ]);

}());