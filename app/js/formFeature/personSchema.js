'use strict';

var featureModule = require('./_index');


var PersonSchema = {
  "type": "object",
  "title": "Types",
  "properties": {
    "boolean": {
      "type": "boolean"
    }
  }

};

featureModule.constant('personSchema', PersonSchema);
