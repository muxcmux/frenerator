# Require all external lib dependencies
# Sprockets reads bower.json, so you can
# only require component directory and
# it will load the main js file, e.g.:
# {
#   ...
#   main: 'lib/whatever.js'
#   ...
# }
#
# ------------------------
#= require jquery
#= require jquery.cookie
#= require jquery-ujs
#= require lodash
#= require backbone
#= require handlebars/handlebars.runtime
#= require fastclick
