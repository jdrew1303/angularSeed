'use strict';

var angular = require('angular');
require('./tcCore/_index')


require('./exampleFeature/_index');
require('./formFeature/_index');


// create and bootstrap application
angular.element(document).ready(function() {

  var moduleDependencies = [
    'tc.core',  // required by all applications and most modules.
    'tc.exampleFeature',
    'tc.formFeature'
  ];

  // mount on window for testing
  window.app = angular.module('app', moduleDependencies);

  angular.module('app').constant('AppSettings', require('./constants'));

  angular.module('app').config(require('./on_config'));

  angular.module('app').run(require('./on_run'));

  angular.bootstrap(document, ['app']);

});
