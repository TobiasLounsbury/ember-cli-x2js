'use strict';

module.exports = {
  name: 'ember-cli-x2js',

  included: function(app) {
    var options = this.app.options.x2jsOptions || {enabled: true};

    if (options.enabled) {
      this.app.import('vendor/x2js/xml2json.js', {
        exports: {
          'x2js': 'X2JS'
        }
      });
    }
  }
};

