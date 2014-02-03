'use strict';

describe('Filter: number', function () {

  var number;

  beforeEach(module('ngWorkshopsApp.filters'));

  beforeEach(inject(function ($filter) {
    number = $filter('number');
  }));

  it('should return the input grouped in threes', function () {
    expect(number('123456')).to.equal('123 456');
    expect(number('1234567')).to.equal('1 234 567');
    expect(number('1234567890')).to.equal('1 234 567 890');
  });

  it('should handle "falsy" values', function () {
    expect(number(null)).to.equal('');
    expect(number(undefined)).to.equal('');
    expect(number(NaN)).to.equal('');
    expect(number('')).to.equal('');
  });

  describe('custom separators', function () {

    it('should support a custom separator', function () {
      expect(number('123456', ',')).to.equal('123,456');
      expect(number('123456', '.')).to.equal('123.456');
      expect(number('123456', '-')).to.equal('123-456');
    });

    it('should fall back to space', function () {
      expect(number('123456', '')).to.equal('123 456');
      expect(number('123456', null)).to.equal('123 456');
    });

  });

});
