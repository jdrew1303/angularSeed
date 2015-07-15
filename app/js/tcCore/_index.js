'use strict';

// JQuery requires some extra tweaking as it is expected to be
// on the window.$ element.
window.$    = window.jQuery = require('jquery')

var angular = require('angular');

require('angular-schema-form');
require('../../../node_modules/angular-schema-form/dist/bootstrap-decorator')
require('angular-ui-router');

// templates are generated by the build process. This transforms
// the views to use the template cache.
require('../templates');

var bulk = require('bulk-require');

var moduleDependencies = [
  'underscore',
  'ui.router',
  'templates',
  'schemaForm'
];

module.exports = angular.module('tc.core', moduleDependencies);

bulk(__dirname, ['./**/!(*_index|*Spec).js']);