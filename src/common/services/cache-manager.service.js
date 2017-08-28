angular.module('shoppingCartApp.services').factory('cacheManager', [
  '$cacheFactory',
  function ($cacheFactory) {
    'use strict';

    return $cacheFactory('temporary-cache-manager');
  }
]);