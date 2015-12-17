// local (client-only) collection
Errors = new Mongo.Collection(null);

throwError = function (message) {
  Errors.insert({message: message});
};

Template.error.helpers({
  errors: function() {
    return Errors.find();
  }
});
