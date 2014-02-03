'use strict';

angular.module('ngWorkshopsApp.filters')
  .filter('number', function () {
    return function (input) {
      var chars = (input || '').split('').reverse();
      var tmp = [];

      while (chars.length) {
        for (var i = 0; i < 3; i += 1) {
          if (chars.length) {
            tmp.push(chars.shift());
          }
        }
        tmp.push(' ');
      }

      if (tmp[tmp.length - 1] === ' ') {
        tmp.pop();
      }

      return tmp.reverse().join('');
    };
  });
