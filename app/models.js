App.Models.Contact = Backbone.Model.extend();

App.Collections.ContactList = Backbone.Collection.extend({
  model: App.Models.Contact,
  
  url: function() {
    return App.base_url + '/contacts/' 
      + App.PrivateKeySingleton.get("private_key_hash") + '.json';
  }
});

App.Models.Message = Backbone.Model.extend({
  url: function() {
    return App.base_url + '/messages/';
  }
});

App.Collections.MessageList = Backbone.Collection.extend({
  model: App.Models.Message,
  
  initialize: function(id) {
    this.id = id;
  },
    
  url: function() {
    return App.base_url + '/messages/' 
      + this.id + '/'
      + App.PrivateKeySingleton.get("public_key") + '.json';
  }
});

// This is a singleton class. There can be only one.
App.Models.PrivateKey = Backbone.Model.extend({

  setPrivateKey : function(privKey) {
    this.set("private_key", privKey.toString()); 
    this.set("public_key", ECDH.compressed_public(privKey.toString())); 
    this.set("private_key_hash", Crypto.SHA256(privKey.toString())); 
  },
  
  regenerate : function() {
    var pk = ECDH.generate_private_key();
    this.setPrivateKey(pk.toString()); 
  },
  
  getPassPhrase : function() {
    var key = this.get("private_key");
    return mn_encode(new BigInteger(key).toString(16));
  },
  
  setPassPhrase : function(pass) {
    var key = new BigInteger(mn_decode(pass), 16).toString();
    this.setPrivateKey(key); 
    
  }
});
App.PrivateKeySingleton = new App.Models.PrivateKey();

// This is a singleton class. There can be only one.
App.Models.ApplicationState = Backbone.Model.extend({
});
App.ApplicationStateSingleton = new App.Models.ApplicationState();
