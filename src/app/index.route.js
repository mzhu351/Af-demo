(function() {
  'use strict';

  angular
    .module('afDemo')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('editEvt', {
        url: '/create',
        templateUrl: 'app/editEvt/newEvt.html',
        controller: 'editEventController',
        controllerAs: 'editEvt'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
