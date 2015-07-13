'use strict';

var featureModule = require('./_index');


var PersonForm = [
  "*",
  {
    "type": "submit",
    "title": "OK"
  }
];

featureModule.constant('personForm', PersonForm);
