class App.View extends Backbone.View
  
  destroy: =>
    # give a chance to subclasses before they die
    @onBeforeDestroy()
    # remove view's delegated events (the ones you add inside events: {})
    @undelegateEvents()
    # release anything subscribed to this with @on
    @off()
    # removes the view from the DOM and calls @stopListening()
    @remove()
  
  onBeforeDestroy: ->
    undefined

  forceChromeRepaint: =>
    # ugly ugly ugly h4x0r shit for ugly ugly chrome
    @$el[0].style.display = 'none'
    @$el[0].offsetHeight
    @$el[0].style.display = '';
  
  # converts the containing form to model attributes and values
  # use this when updating models with @model.set @serializeForm()
  serializeForm: =>
    obj = {}
    # one form per view or I'll hunt you down and kill you
    _.each @$('form').serializeArray(), (el) ->
      # Rails array params shenanigans
      if el.name.match /\[\]/
        name = el.name.replace('[', '').replace(']', '')
        if typeof obj[name] == 'undefined'
          obj[name] = [el.value]
        else
          obj[name].push el.value
      else
        obj[el.name] = el.value
    obj
