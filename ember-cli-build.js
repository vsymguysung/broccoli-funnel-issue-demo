/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var Funnel = require('broccoli-funnel');
var path = require('path');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  var fontAwesomeFonts = new Funnel('bower_components/components-font-awesome/fonts', {
    srcDir: '.',
    include: ['**/*.woff', '**/*.eot', '**/*.svg', '**/*.ttf', '**/*.otf'],
    destDir: '/assets/fonts/fontawesome'
  });
  console.log('fontAwesomeFonts:' + JSON.stringify(fontAwesomeFonts));
  // Providing additional trees to the `toTree` method will result in those
  // trees being merged in the final output.
  module.exports = app.toTree(fontAwesomeFonts);


  // In the above configuration, the assets from the fictive bower dependency called components-font-awesome 
  // can now be found under /assets/fonts/fontawesome, and might be linked to from index.html like so:
  //<link rel="stylesheet" href="assets/fonts/fontawesome/css/font-awesome.min.css">


  var bootstrapFontAssets = Funnel('bower_components/bootstrap-sass-official/assets/fonts/boostrap', {
    srcDir: '.',
    include: ['**/*.eot', '**/*.svg', '**/*.ttf', '**/*.woff', '**/*.woff2'],
    // include: [ /.eot$/, /.svg$/, /.ttf$/, /.woff$/, /.woff2$/ ],
    destDir: '/assets/fonts/bootstrap'
  });
  console.log('bootstrapFontAssets:' + JSON.stringify(bootstrapFontAssets));
  // Providing additional trees to the `toTree` method will result in those
  // trees being merged in the final output.
  module.exports = app.toTree(bootstrapFontAssets);


  return app.toTree();
};
