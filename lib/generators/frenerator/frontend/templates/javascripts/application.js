// Require all external lib dependencies
// Sprockets reads bower.json, so you can
// only require component directory and
// it will load the main js file, e.g.:
// {
//   ...
//   main: 'lib/whatever.js'
//   ...
// }
// --------------------------------------
//= require jquery
//= require jquery-ujs
//= require lodash
//= require backbone
//= require handlebars/handlebars.runtime
//= require fastclick
//
// App Entry point
// ---------------
//= require namespace
//= require templates
//
// Require all the parts that make up the app
// ------------------------------------------
//
// 1. Base classes
// ---------------
//= require_tree ./base
//
// 2. Collections
// --------------
//= require_tree ./collections
//
// 3. Models
// ---------
//= require_tree ./models
//
// 4. Views
// --------
//= require_tree ./views
//
// 5. Components
// -------------
//= require components
//
// 6. Init code
// ------------
//= require main
