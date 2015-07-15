'use strict';

var istanbul = require('browserify-istanbul');
var isparta  = require('isparta');

module.exports = function(config) {

  config.set({

    basePath: '../',

    frameworks: ['jasmine', 'browserify'],

    preprocessors: {
      'app/js/**/*.js': ['browserify', 'babel', 'coverage'],
      'test/unit/**/*.js': ['browserify', 'babel',],
      'factories/**/*.js': ['browserify', 'babel',],
      'test/factorySpec.js': ['browserify', 'babel',]
    },

    browsers: ['Chrome'],

    reporters: ['progress', 'coverage'],

    autoWatch: true,

    browserify: {
      debug: true,
      transform: [
        'bulkify',
        istanbul({
          instrumenter: isparta,
          ignore: ['**/node_modules/**', '**/test/**']
        })
      ]
    },

    proxies: {
      '/': 'http://localhost:9876/'
    },

    urlRoot: '/__karma__/',

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    files: [
      // app-specific code
      'app/js/main.js',

      //  test data factories
      'factories/**/*.js',

      // test files
      'test/factorySpec.js',
      'test/unit/**/*.js'
    ],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true

  });

};
