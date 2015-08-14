'use strict';

module.exports = {
  client: {
    lib: {
      css: [
        'public/lib/angular-material/angular-material.css',
        'public/lib/font-awesome/css/font-awesome.css'
      ],
      js: [
        'public/lib/jquery/dist/jquery.js',
        'public/lib/angular/angular.js',
        'public/lib/lodash/lodash.js',
        'public/lib/angular-animate/angular-animate.js',
        'public/lib/angular-aria/angular-aria.js',
        'public/lib/angular-material/angular-material.js',
        'public/lib/angular-resource/angular-resource.js',
        'public/lib/angular-ui-router/release/angular-ui-router.js',
        'public/lib/angular-ui-utils/ui-utils.js'
      ],
    },
    css: 'public/dist/application.min.css',
    js: 'public/dist/application.min.js'
  }
};
