App.Views.ContactsList = Backbone.View.extend({
  
  template: function(context) {
    var source   = $("#contacts_template").html();
    var template = Handlebars.compile(source);

    return template(context);
  },

  initialize: function() {
    this.collection = new App.Models.ContactList([
      {
          public_key: '02DA857E3544DEEE37648C6D5534779708'
      },
      {
          public_key: '02E71B4966BCC099BCA6AF121FDE17B636'
      },
      {
          public_key: '03C10168066AA5A3DECFB281BFC9155CDE'
      }
    ]);
    this.collection.on('reset', this.render, this);
  },

  render: function() {
    this.$el.html(this.template({ contacts: this.collection.toJSON() }));
    this.show();
  },

  show: function() {
    $('#content').html(this.el);
  }
});

App.Views.ShowConversation = Backbone.View.extend({
  
  template: function(context) {
    var source   = $("#show_conversation_template").html();
    var template = Handlebars.compile(source);

    return template(context);
  },

  render: function() {
    this.$el.html(this.template(
      {
          public_key: '02DA857E3544DEEE37648C6D5534779708'
      }
    ));
    this.show();
  },

  show: function() {
    $('#content').html(this.el);
  }
});

App.Views.Login = Backbone.View.extend({

  template: function(context) {
    var source   = $("#logon_template").html();
    var template = Handlebars.compile(source);

    return template(context);
  },

  events: {
    'click #regenerate-passphrase': 'doRegenerate',
    'submit form': 'doLogon',
  },

  render: function() {
    this.$el.html(this.template());
    this.show();
  },

  show: function() {
    $('#content').html(this.el);
  },
  
  doLogon: function(){
    App.Router.navigate('contacts', { trigger: true });
  },
  
  doRegenerate: function(){
    App.PrivateKeySingleton.regenerate();
    $('#passphrase_created').val(App.PrivateKeySingleton.get("private_key"));
    return false;
  }
});
