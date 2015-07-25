'use strict';

/**
 * @ngInject
 */
function OnConfig($stateProvider, $locationProvider, $urlRouterProvider) {

  $locationProvider.html5Mode(true);

  $stateProvider
    .state('Home', {
      url: '/',
      controller: 'ExampleController as home',
      templateUrl: 'home.html',
      title: 'Home'
    })
    .state('Form', {
      url: '/form',
      controller: 'SubmitFormController as submit',
      controllerAs: 'submit',
      templateUrl: 'submitForm.html',
      title: 'Form',
      resolve: {
        schema : getSchema,
        form : form,
        // load the model from a service to prepopulate data in form.
        model : dummy,
        // the service to submit the form to. Try to keep this api standard
        // across all forms. This will allow you to reuse as much of the
        // templates/controllers as possible. By doing this creating a new
        // form is only about configuration adn wiring.
        submitService : dummy
      }
    });

  /**
   * @ngInject
   * @param DropwizardApiService
   * @param $q
   * @returns {*}
   */
  function getSchema(DropwizardApiService){
    console.log(DropwizardApiService);
    return DropwizardApiService.generateSchema();
  }

  /**
   * @ngInject
   * @param $q
   * @returns {Promise}
   */
  function dummy($q){
    return $q.when({});
  }

  /**
   * @ngInject
   * @param $q
   * @param personForm
   * @returns {Promise}
   */
  function form($q, personForm){
    return $q.when(personForm);
  }

  $urlRouterProvider.otherwise('/');




}

module.exports = OnConfig;
