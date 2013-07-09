App.Routers.Navigation = Backbone.Router.extend({

  routes: {
    'contacts'             : 'contacts',
    'conversation/:id'     : 'showConversation',
    '*path'                : 'defaultRoute'
  },

  defaultRoute: function() {
    var view = new App.Views.Login();
    view.render();
  },

  contacts: function() {
    var view = new App.Views.ContactsList();
    view.render();
  },

  showConversation: function() {
    var view = new App.Views.ShowConversation();
    view.render();
  },

});
