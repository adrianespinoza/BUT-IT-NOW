describe('Tests for Cart Dashboard Controller: shoppingCart.CartDashboardController', function () {
    'use strict';
    var scope,
      shoppingCartListMock,
      offeredProductsListMock;

    beforeEach(module('shoppingCartApp'));
    beforeEach(module('shoppingCartApp.cartDashboard'));
    beforeEach(function () {module('shoppingCartApp.services');});

    beforeEach(inject([
        '$rootScope',
        '$controller',
        function (
          $rootScope,
          $controller
        ) {
            scope = $rootScope.$new();
            shoppingCartListMock = [
                {title: 'TV', quantity: 1, price: 500},
                {title: 'Radio', quantity: 1, price: 80}
            ];
            offeredProductsListMock = [
                {title: 'TV', price: 500},
                {title: 'Radio', price: 80},
                {title: 'Microwave', price: 150},
                {title: 'ChromeCast', price: 70}
            ];
            $controller('shoppingCart.CartDashboardController', {
                $scope: scope,
                shoppingCartList: shoppingCartListMock,
                offeredProductsList: offeredProductsListMock
            });
        }
    ]));

    it('should be set the items var in controller', function () {
        var items = scope.items;
        expect(items.length).toBeGreaterThan(0);
    });

    it('should remove an item', function () {
        var items = scope.items;
        expect(items.length).toBe(2);
        scope.remove(1);
        expect(items.length).toBe(1);
    });

    it('should add a different item', function () {
        var items = scope.items;
        expect(items.length).toBe(2);
        scope.offeredProductSelected = {title: 'Microwave', price: 150};
        scope.addProduct({$invalid: false});
        expect(items.length).toBe(3);
    });

    it('should add an existing item', function () {
        var items = scope.items;
        expect(items.length).toBe(2);
        scope.offeredProductSelected = {title: 'TV', price: 500};
        scope.addProduct({$invalid: false});
        expect(items.length).toBe(2);
    });
});
