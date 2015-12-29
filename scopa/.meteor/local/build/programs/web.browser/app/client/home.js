(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/home.js                                                      //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
function otherId(game) {                                               // 1
  return game.currentTurn[game.currentTurn[0] === Meteor.userId() ? 1 : 0];
}                                                                      //
                                                                       //
Template.gameList.helpers({                                            // 5
  games: function () {                                                 // 6
    return Games.find({ inProgress: true }).map(function (game) {      // 7
      game.otherPlayer = Meteor.users.findOne(otherId(game)).username;
      game.started = moment(game.started).fromNow();                   // 9
      return game;                                                     // 10
    });                                                                //
  }                                                                    //
});                                                                    //
                                                                       //
Template.userList.helpers({                                            // 15
  users: function () {                                                 // 16
    var myid = Meteor.userId(),                                        // 17
        cantPlayAgainst = [myid];                                      //
                                                                       //
    Games.find({ inProgress: true }).forEach(function (game) {         // 20
      cantPlayAgainst.push(otherId(game));                             // 21
    });                                                                //
                                                                       //
    return Meteor.users.find({ _id: { $not: { $in: cantPlayAgainst } } });
  }                                                                    //
                                                                       //
});                                                                    //
                                                                       //
Template.userItem.events({                                             // 29
  'click button': function (evt, template) {                           // 30
    Meteor.call('createGame', template.data._id);                      // 31
  }                                                                    //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);
