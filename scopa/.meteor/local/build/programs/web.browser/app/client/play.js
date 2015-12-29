(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/play.js                                                      //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Template.hand.events({                                                 // 1
  'click .card': function (evt, template) {                            // 2
    if (template.data.yourTurn) {                                      // 3
      Meteor.call('takeTurn', template.data._id, Meteor.userId(), this);
    }                                                                  //
  }                                                                    //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);
