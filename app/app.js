window.App = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  

  base_url: 'http://178.79.174.142',

  auth_token: function() {
    return $.cookie('auth_token');
  },

  initialize: function() {
    App.Router = new App.Routers.Navigation();
    Backbone.history.start();
  }

};
