App.Views.ContactsList = Backbone.View.extend({
  
  template: function(context) {
    var source   = $("#contacts_template").html();
    var template = Handlebars.compile(source);

    return template(context);
  },

  initialize: function() {
    this.collection = new App.Collections.ContactList();
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

  initialize: function(id) {
    this.collection = new App.Collections.MessageList(id.id);
    this.collection.on('reset', this.render, this);
  },

  events: {
    'click #send-message': 'doSendMessage',
  },

  render: function(id) {
    App.ApplicationStateSingleton.set("current_public_key", id);
    this.$el.html(this.template(
      {
          public_key: id,
          private_key: App.PrivateKeySingleton.get("private_key"),
          private_key_hash: App.PrivateKeySingleton.get("private_key_hash"),
      }
    ));
    this.show();
  },

  show: function() {
    $('#content').html(this.el);
  },
  
  doSendMessage: function(){
    var encrypted = ECDH.encrypt(App.PrivateKeySingleton.get("private_key"),
      App.ApplicationStateSingleton.get("current_public_key"), 
      $('#the-message').val());
      
    alert($('#the-message').val() + ' ' + App.PrivateKeySingleton.get("private_key") +
      ' ' + App.ApplicationStateSingleton.get("current_public_key") +
      ' ' + encrypted);
      
    $('#encrypted-message').text(encrypted);
      
    return false;
  },
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
  
  doLogon: function(event){
    event.preventDefault(); 
    var pk = $('#passphrase_input').val();
    App.PrivateKeySingleton.setPrivateKey(pk);
    window.location.assign('#contacts');
  },
  
  doRegenerate: function(){
    App.PrivateKeySingleton.regenerate();
    $('#passphrase_created').val(App.PrivateKeySingleton.get("private_key"));
    return false;
  }
});
