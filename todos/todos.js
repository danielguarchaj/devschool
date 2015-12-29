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

      Meteor.call('addTodo', text);

      //clear form
      event.target.text.value = '';
    },
    'click .toggle-checked': function(){
      Meteor.call('setChecked', this._id, !this.checked);
    },
    'click .delete-todo': function(){
      if(confirm('Are you sure?')){
      Meteor.call('deleteTodo', this._id);
      }
    }
  });

  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });

}

//meteor methods

Meteor.methods({
  addTodo: function(text){
    if(!Meteor.userId()){
      throw new Meteor.Error('Not Authorized');
    }
    Todos.insert({
      text: text,
      createdAt: new Date(),
      userId: Meteor.userId(),
      username: Meteor.user().username
    });
  },
  deleteTodo: function(todoId){
    Todos.remove(todoId);
  },
  setChecked: function(todoId, setChecked){
    Todos.update(todoId, {$set:{checked: setChecked}});//check the todos
  }
});

if (Meteor.isServer) {

}
