'use strict';

var angular = require('angular');
require('ng-mock-e2e');
require('./tcCore/_index');

require('./apis/_index');

require('./exampleFeature/_index');
require('./formFeature/_index');


// create and bootstrap application
angular.element(document).ready(function() {

  var moduleDependencies = [
    'tc.core',  // required by all applications and most modules.
    'tc.exampleFeature',
    'tc.formFeature',
    'tc.apis'
  ];

  // mount on window for testing
  window.app = angular.module('app', moduleDependencies);

  angular.module('app').constant('AppSettings', require('./constants'));

  angular.module('app').config(require('./onConfig'));

  angular.module('app').run(require('./onRun'));

  angular.bootstrap(document, ['app']);

});
