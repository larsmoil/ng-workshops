'use strict';

angular.module('ngWorkshopsApp.filters')
  .filter('number', function () {
    return function (input) {
      return (input || '').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
    };
  });
