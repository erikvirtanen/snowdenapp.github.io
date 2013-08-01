App.Views.ContactsList = Backbone.View.extend({
  
  template: function(context) {
    var source   = $("#contacts_template").html(); //$("#show_conversation_template").html();
    var template = Handlebars.compile(source);

    return template(context);
  },

  initialize: function() {
    this.collection = new App.Collections.ContactList();
    this.collection.on('reset', this.render, this);
  },

  render: function() {
    this.$el.html(this.template({ 
      contacts: this.collection.toJSON() 
    }));
    this.show();
  },

  show: function() {
    $('#content').html(this.el);
    $("#content").css("width","auto");
    $("body").css('margin-top', '0px');
    $("body").removeClass("container");
    $("body").addClass("fancy-theme");
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
    'keypress .chat-input input': 'doSendMessage',
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
   /* $('#conversation-panel').html(this.el);*/
    $('#content').html(this.el);
    $("#content").css("width","auto");
    $("body").css('margin-top', '0px');
    $("body").removeClass("container");
    $("body").addClass("fancy-theme");

  },
  
  doSendMessage: function(e){
    console.log(e.keyCode);
      var inputText=$('#the-message').val();
      console.log(inputText);
      if (e.keyCode==13 && inputText)
      {
          console.log(inputText);
          var encrypted = ECDH.encrypt(App.PrivateKeySingleton.get("private_key"),this.collection.id, inputText);
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
      }

      

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
    var pass = $('#passphrase_input').val();
    App.PrivateKeySingleton.setPassPhrase(pass);
    window.location.assign('#contacts');
  },
  
  doRegenerate: function(){
    App.PrivateKeySingleton.regenerate();
    $('#passphrase_created').val(App.PrivateKeySingleton.getPassPhrase());
    $('#porn_name').text(porn_name(App.PrivateKeySingleton.get("public_key")));
    $('#public_link').text(App.PrivateKeySingleton.get("public_key"));
    $('#the_hash').text(App.PrivateKeySingleton.get("private_key_hash"));
    return false;
  }
});
