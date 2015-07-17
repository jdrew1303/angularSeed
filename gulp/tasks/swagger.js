var gulp          = require('gulp');
var swagger       = require('gulp-swagger');
var remoteSrc     = require('gulp-remote-src');
var rename        = require("gulp-rename")
var _             = require('lodash-node');
var config        = require('../config');

var allClientLibs = [];

// Use metaprogramming to generate seperate gulp functions for each of the apis
// we've specified in the config file.

_.map(config.swagger.src, function(source){

  var fileName = _.camelCase(source.moduleName) + '.js';
  var getSwaggerFileTaskName = _.camelCase('get swagger file for ' + source.moduleName);
  var generateApiForTaskName = _.camelCase('generate client library for ' + source.moduleName);

  allClientLibs.push(generateApiForTaskName);

  // The initial task to download the swagger definition files.
  gulp.task(getSwaggerFileTaskName , function(){
    return remoteSrc(source.filename, { base: source.url, })
      .pipe(rename(source.filename))
      .pipe(gulp.dest(config.swagger.dest));
  })

  // This task parses the swagger files and generates Angular client libraries.
  gulp.task(generateApiForTaskName, [getSwaggerFileTaskName], function() {

    var className = _.capitalize(_.camelCase(source.moduleName));
    var swaggerCodeGenOptions = {
      'filename': fileName,
      'codegen': {
        'filename': fileName,
        'className': className,
        'template': {
          'class' : './gulp/tasks/templates/angularClass.mustache',
          'method' : './gulp/tasks/templates/angularMethod.mustache',
          'request' : './gulp/tasks/templates/angularRequest.mustache'
        }
      }
    };

    return gulp.src(config.swagger.dest + source.filename)
        .pipe(swagger(swaggerCodeGenOptions))
        .pipe(rename(fileName))
        .pipe(gulp.dest(config.swagger.dest));
  });

});

// This is the generic task to generate all client libraries specified in the
// config files.
gulp.task('api', allClientLibs);
