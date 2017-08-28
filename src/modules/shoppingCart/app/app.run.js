(function () {

  'use strict';

  angular
    .module('shoppingCartApp')
    .run([
      '$rootScope',
      function ($rootScope) {
        $rootScope.$on(
          '$stateChangeStart',
          function () {
            console.log('something to do.');
          }
        );
      }]);
}());