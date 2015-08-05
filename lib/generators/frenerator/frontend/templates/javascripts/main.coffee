App.init = ->
  
  # Not components
  FastClick.attach(document.body)
  
  # Components
  _.forIn App.Components, (component, name) ->
    # only init a component if its 'el' exist in the DOM
    # global component's 'el' is set to 'body' so they get
    # initialized on all pages
    if typeof(component.prototype.el) != 'undefined' && $(component.prototype.el).length != 0
      console.info "Initializing component: #{name}"
      new component
    # Notify all components have initialized
    console.info 'App ready'
    App.Dispatch.trigger 'app:ready'
  
$(document).ready App.init
