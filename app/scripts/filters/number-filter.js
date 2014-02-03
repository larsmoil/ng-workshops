'use strict';

angular.module('ngWorkshopsApp.filters')
  .filter('number', function () {
    return function (input, separator) {
      var chars = (input || '').split('').reverse();
      var tmp = [];

      separator = separator || ' ';

      while (chars.length) {
        for (var i = 0; i < 3; i += 1) {
          if (chars.length) {
            tmp.push(chars.shift());
          }
        }
        tmp.push(separator);
      }

      if (tmp[tmp.length - 1] === separator) {
        tmp.pop();
      }

      return tmp.reverse().join('');
    };
  });
