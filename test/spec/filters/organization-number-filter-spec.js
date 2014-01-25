'use strict';

describe('Filter: organizationNumber', function () {

  // load the filter's module
  beforeEach(module('ngWorkshopsApp.filters'));

  // initialize a new instance of the filter before each test
  var organizationNumber;
  beforeEach(inject(function ($filter) {
    organizationNumber = $filter('organizationNumber');
  }));

  it('should return the input prefixed with "organizationNumber filter:"', function () {
    var text = 'angularjs';
    expect(organizationNumber(text)).to.equal('organizationNumber filter: ' + text);
  });

});
