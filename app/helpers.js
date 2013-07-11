Handlebars.registerHelper('decrypt', function(payload, sender, recipient) {
  
  // To t we need our private key and there public key
  var pubKey = sender;
  if(sender == App.PrivateKeySingleton.get("public_key"))
    pubKey = recipient;
  return ECDH.decrypt(
    App.PrivateKeySingleton.get("private_key"),
    pubKey, 
    payload);
});
