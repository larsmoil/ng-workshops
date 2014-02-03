'use strict';

angular.module('ngWorkshopsApp.filters')
  .filter('number', function () {
    return function (input) {
      return input;
    };
  });
