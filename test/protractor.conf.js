'use strict';

exports.config = {

  allScriptsTimeout: 11000,

  baseUrl: 'http://localhost:3002/',

  multiCapabilities: [
    { browserName: 'firefox', shardTestFiles: true, maxInstances: 2 },
    { browserName: 'chrome',  shardTestFiles: true, maxInstances: 2 }
  ],

  framework: 'jasmine',

  jasmineNodeOpts: {
    isVerbose: true,
    showColors: true,
    includeStackTrace: true,
    defaultTimeoutInterval: 30000
  },

  specs: [
    'e2e/**/*.js',
    'test/factorySpec.js'
  ]

};
