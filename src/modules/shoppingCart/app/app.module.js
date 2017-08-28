angular.module('shoppingCartApp.models', []);

angular.module('shoppingCartApp.filters', []);

angular.module('shoppingCartApp.constants', []);

angular.module('shoppingCartApp.providers', [
  'shoppingCartApp.constants'
]);

angular.module('shoppingCartApp.services', [
  'ngRoute',
  'ui.router',
  'ngResource',
  'shoppingCartApp.constants',
  'shoppingCartApp.filters',
  'shoppingCartApp.models'
]);

angular.module('shoppingCartApp.controllers', [
  'mm.foundation',
  'shoppingCartApp.constants',
  'shoppingCartApp.services',
  'shoppingCartApp.providers'
]);

angular.module('shoppingCartApp.directives', [
  'ngRoute',
  'ui.utils',
  'mm.foundation',
  'shoppingCartApp.constants',
  'shoppingCartApp.services',
  'shoppingCartApp.providers',
  'angular-growl'
]);

angular.module('shoppingCartApp', [
  'ngSanitize',
  'ui.router',
  'ngRoute',
  'ngTable',
  'duScroll',
  'mm.foundation',
  'angular.filter',
  'angular-growl',
  'angular-momentjs',
  'angularSpinner',
  'camelCaseToHuman',
  'shoppingCartApp.constants',
  'shoppingCartApp.directives',
  'shoppingCartApp.controllers',
  'shoppingCartApp.services',
  'shoppingCartApp.providers',
  'shoppingCartApp.cartDashboard'
]);
