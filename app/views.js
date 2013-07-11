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
    this.$el.html(this.template({ 
      private_key_hash: App.PrivateKeySingleton.get("private_key_hash"),
      contacts: this.collection.toJSON() 
    }));
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
    this.collection.bind('add', this.render, this);
  },

  events: {
    'click #send-message': 'doSendMessage',
  },

  render: function() {

    this.$el.html(this.template(
      {
        messages: this.collection.toJSON(),
        public_key: this.collection.id,
        private_key: App.PrivateKeySingleton.get("private_key"),
        private_key_hash: App.PrivateKeySingleton.get("private_key_hash"),
      }
    ));
    this.show();
    this.delegateEvents();
  },

  show: function() {
    $('#content').html(this.el);
  },
  
  doSendMessage: function(){
  
    var encrypted = ECDH.encrypt(App.PrivateKeySingleton.get("private_key"),
      this.collection.id, 
      $('#the-message').val());
      
    this.collection.create({ 
      sender: App.PrivateKeySingleton.get("public_key"), 
      recipient: this.collection.id, 
      payload: encrypted 
    }, 
    {
      success: function(model, resp) 
      {
        alert("Success");
      },
      error: function() {
      }
    });
      
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
