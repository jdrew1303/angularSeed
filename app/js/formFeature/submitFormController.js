'use strict';

var featureModule = require('./_index');

/**
 * @ngInject
 */
function SubmitFormController($scope, schema, form, model, submitService) {
  var vm = this;
  vm.schemaJson = schema;
  vm.formJson   = JSON.parse(JSON.stringify(form));
  vm.modelData  = model || {};
  //console.log($scope);

  vm.submitForm = function(form, model) {
    //console.log(model);
    // First we broadcast an event so all fields validate themselves
    vm.$broadcast('schemaFormValidate');
        // Then we check if the form is valid
        if (form.$valid) {
            console.log('Whoot!!! We\'re good to go!!!');
        }
    };
}

featureModule.controller('SubmitFormController', SubmitFormController);
