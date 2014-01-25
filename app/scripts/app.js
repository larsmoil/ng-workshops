'use strict';

angular.module('ngWorkshopsApp.controllers', []);
angular.module('ngWorkshopsApp.filters', []);

angular.module('ngWorkshopsApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ngWorkshopsApp.controllers',
  'ngWorkshopsApp.filters'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
