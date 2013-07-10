App.Routers.Navigation = Backbone.Router.extend({

  routes: {
    'contacts'             : 'contacts',
    'messages'             : 'messages',
    'conversation/:id'     : 'showConversation',
    '*path'                : 'defaultRoute'
  },

  defaultRoute: function() {
    var view = new App.Views.Login();
    view.render();
  },

  contacts: function() {
    var view = new App.Views.ContactsList();
    view.collection.fetch({ reset: true });
  },

  showConversation: function(id) {
    var view = new App.Views.ShowConversation({ id: id });
    view.collection.fetch({ reset: true });
  },

});
