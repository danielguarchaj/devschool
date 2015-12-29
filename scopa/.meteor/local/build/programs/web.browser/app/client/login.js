(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/login.js                                                     //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Template.signup.events({                                               // 1
  'click button': function (evt, template) {                           // 2
    evt.preventDefault();                                              // 3
    Accounts.createUser({                                              // 4
      email: template.find("#su-email").value,                         // 5
      username: template.find("#su-username").value,                   // 6
      password: template.find("#su-password").value                    // 7
    });                                                                //
  }                                                                    //
});                                                                    //
                                                                       //
Template.login.events({                                                // 12
  'click button': function (evt, template) {                           // 13
    evt.preventDefault();                                              // 14
    Meteor.loginWithPassword(template.find("#li-username").value, template.find("#li-password").value);
  }                                                                    //
});                                                                    //
                                                                       //
Template.logout.events({                                               // 22
  'click button': function (evt, template) {                           // 23
    evt.preventDefault();                                              // 24
    Meteor.logout();                                                   // 25
  }                                                                    //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);
