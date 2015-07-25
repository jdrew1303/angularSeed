'use strict';

var formFeatureModule = require('./_index');
require("../apis/_index");

/**
 * @ngInject
 */
function DropwizardApiService(DropwizardService) {

  return new DropwizardService('http://localhost:8080');

}

formFeatureModule.factory('DropwizardApiService', DropwizardApiService);
