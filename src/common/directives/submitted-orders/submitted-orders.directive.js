/**
 * Created by Adrian on 8/28/2017.
 */
angular.module('shoppingCartApp.directives').directive('submittedOrders', [
  function () {
    'use strict';
    var linkFunction = function (scope, element) {
    };

    return {
      restrict: 'EA',
      scope: {
        items: '='
      },
      templateUrl: 'common/directives/submitted-orders/submitted-orders.template.html',
      link: linkFunction
    };
  }]);