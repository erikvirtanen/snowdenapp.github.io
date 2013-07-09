App.Models.Contact = Backbone.Model.extend();

App.Models.ContactList = Backbone.Collection.extend({
  model: App.Models.Contact
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
    this.set_private_key(pk.toString()); 
  }
});
App.PrivateKeySingleton = new App.Models.PrivateKey();

// This is a singleton class. There can be only one.
App.Models.ApplicationState = Backbone.Model.extend({
});
App.ApplicationStateSingleton = new App.Models.ApplicationState();
