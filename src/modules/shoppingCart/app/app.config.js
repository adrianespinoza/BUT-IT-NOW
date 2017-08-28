(function () {

  'use strict';

  angular
    .module('shoppingCartApp')
    .config([
      '$stateProvider',
      '$urlRouterProvider',
      'growlProvider',
      function (
        $stateProvider,
        $urlRouterProvider,
        growlProvider
      ) {

        $urlRouterProvider.otherwise('/dashboard');

        $stateProvider
          .state('app', {
            url: '/dashboard',
            abstract: true
          });
        growlProvider.globalTimeToLive(7000);
      }
    ]);
}());