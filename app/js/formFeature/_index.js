'use strict';

var angular = require('angular');
var bulk = require('bulk-require');

module.exports = angular.module('tc.formFeature', ['tc.apis']);

bulk(__dirname, ['./**/!(*_index|*Spec).js']);
