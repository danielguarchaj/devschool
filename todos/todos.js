Todos = new Mongo.Collection('todos'); //create the todos collection as global client/server

if (Meteor.isClient) {
  //Template helpers:
  Template.main.helpers({
    todos: function(){
      return Todos.find();
    }
  });
}

if (Meteor.isServer) {

}
