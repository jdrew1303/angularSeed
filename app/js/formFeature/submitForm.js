'use strict';

var featureModule = require('./_index');

/**
 * @ngInject
 */
function SubmitFormController($scope, schema, form, model, submitService) {

  this.schemaJson = schema;
  this.formJson   = JSON.parse(JSON.stringify(form));
  this.modelData  = model || {};
  //console.log($scope);

  this.submitForm = function(form, model) {
    //console.log(model);
    // First we broadcast an event so all fields validate themselves
    this.$broadcast('schemaFormValidate');
        // Then we check if the form is valid
        if (form.$valid) {
            console.log('Whoot!!! We\'re good to go!!!');
        }
    };
}

featureModule.controller('SubmitFormController', SubmitFormController);
