describe('Tests for Cart Dashboard Controller: shoppingCart.CartDashboardController', function () {
    'use strict';
    var scope,
        shoppingCartListMock;

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
            $controller('shoppingCart.CartDashboardController', {
                $scope: scope,
                shoppingCartList: shoppingCartListMock
            });
        }
    ]));

    it('should be set the items var in controller', function () {
        var items = scope.items;
        expect(items.length).toBeGreaterThan(0);;
    });
});
