(function(root) {
  root.App = {
    // A component is a top level backbone view
    // and it gets automatically instantiated in main
    Components: {},
    // coffee classes go here
    Views: {},
    Models: {},
    Collections: {},
    Templates: {},
    // awesome sauce
    Dispatch: _.clone(Backbone.Events)
  }
})(window);
