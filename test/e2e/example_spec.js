/*global browser, by */

'use strict';

var IndexPage = require('./pages/indexPage');
var index;
describe('E2E: Example', function() {

  beforeEach(function() {
    // We create the page objects we wish to work with. These can also be
    // page fragments (in case we have headers and footers).
    index = new IndexPage();
  });

  it('should route correctly', function() {
    expect(browser.getLocationAbsUrl()).toMatch('/');
  });

  it('should show the number defined in the controller', function() {
    expect(index.numberText.getText()).toEqual('1234');
  });

});
