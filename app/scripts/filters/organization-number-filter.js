'use strict';

angular.module('ngWorkshopsApp.filters')
  .filter('organizationNumber', function () {
    return function (input) {
      return 'organizationNumber filter: ' + input;
    };
  });
