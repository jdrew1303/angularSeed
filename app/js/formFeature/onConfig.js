'use strict';

var featureModule = require('./_index');

/**
 * @ngInject
 */
function formFeatureConfig($stateProvider) {

  $stateProvider.state('Form', {
    url: '/form',
    controller: 'SubmitFormController as submit',
    controllerAs: 'submit',
    templateUrl: 'submitForm.html',
    title: 'Form',
    resolve: {
      schema : ['$q', 'personSchema', function($q, personSchema){ return $q.when(personSchema); }],
      form : ['$q', 'personForm', function($q, personForm){ return $q.when(personForm); }],
      // load the model from a service to prepopulate data in form.
      model : ['$q', function($q){ return $q.when({}); }],
      // the service to submit the form to. Try to keep this api standard
      // across all forms. This will allow you to reuse as much of the
      // templates/controllers as possible. By doing this creating a new
      // form is only about configuration adn wiring.
      submitService : ['$q', function($q){ return $q.when({}); }]
    }
  });
}

featureModule.config(formFeatureConfig);
