'use strict';

var featureModule = require('./_index');


var PersonSchema = {
  "type": "object",
  "title": "Comment",
  "properties": {
    "name":  {
      "title": "Name",
      "type": "string"
    },
    "email":  {
      "title": "Email",
      "type": "string",
      "pattern": "^\\S+@\\S+$",
      "description": "Email will be used for evil."
    },
    "comment": {
      "title": "Comment",
      "type": "string",
      "maxLength": 20,
      "validationMessage": "Don't be greedy!"
    }
  },
  "required": ["name","email","comment"]
};

featureModule.constant('personSchema', PersonSchema);
