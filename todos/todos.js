Todos = new Mongo.Collection('todos'); //create the todos collection as global client/server

if (Meteor.isClient) {
  //Template helpers:
  Template.main.helpers({
    todos: function(){
      return Todos.find({}, {sort: {createdAt: -1}});
    }
  });

  Template.main.events({
    'submit .new-todo': function(event){
      event.preventDefault();//prevent submit default
      var text = event.target.text.value;

      Todos.insert({
        text: text,
        createdAt: new Date()
      });

      //clear form
      event.target.text.value = '';
    },
    'click .toggle-checked': function(){
      Todos.update(this._id, {$set:{checked: ! this.checked}});//check the todos
    },
    'click .delete-todo': function(){
      if(confirm('are you sure?')){
      Todos.remove(this._id);
      }
    }
  });
}
if (Meteor.isServer) {

}
