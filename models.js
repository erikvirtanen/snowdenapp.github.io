App.Models.Contact = Backbone.Model.extend({
  defaults : {
    public_key : '0321A264137612CE1A4FC81E345878DA8F',
  },
});

App.Models.ContactList = Backbone.Collection.extend({
  model: App.Models.Contact
});

// This is a singlton class. There can be only one.
App.Models.PrivateKey = Backbone.Model.extend({
  defaults : {
    private_key : '141031609780230072025129659534456585462',
    public_key : '027344BD9F2281CD0FCFF51C5AADEBA427',
    private_key_hash : 'sdfsdfsdf',
  },
  
  regenerate : function() {
    var pk = ECDH.generate_private_key();
    this.set("private_key", pk); 
    this.set("public_key", ECDH.compressed_public(pk)); 
  }
});
App.PrivateKeySingleton = new App.Models.PrivateKey();
