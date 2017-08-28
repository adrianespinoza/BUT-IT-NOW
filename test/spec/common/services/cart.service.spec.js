describe('Tests for Cart service: cartService', function () {
  'use strict';
  var scope,
    shoppingCartListMock,
    cartServiceMock;

  beforeEach(module('shoppingCartApp'));
  beforeEach(function () {module('shoppingCartApp.services');});

  beforeEach(inject([
    '$rootScope',
    'cartService',
    function (
      $rootScope,
      cartService
    ) {
      scope = $rootScope.$new();
      shoppingCartListMock = [
        {title: 'TV', quantity: 1, price: 500},
        {title: 'Radio', quantity: 1, price: 80}
      ];
      cartServiceMock = cartService;
    }
  ]));

  it('should calculate cart total', function () {
    var total = cartServiceMock.cartTotalCalculation(shoppingCartListMock);
    expect(total).toBe(580);
  });
});
