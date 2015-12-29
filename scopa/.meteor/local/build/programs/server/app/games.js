(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// games.js                                                            //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Games = new Meteor.Collection('games');                                // 1
                                                                       //
if (Meteor.isServer) {                                                 // 3
  Meteor.publish('games', function () {                                // 4
    return Games.find({ currentTurn: this.userId });                   // 5
  });                                                                  //
                                                                       //
  Meteor.publish('users', function () {                                // 8
    return Meteor.users.find();                                        // 9
  });                                                                  //
}                                                                      //
                                                                       //
if (Meteor.isClient) {                                                 // 14
  Meteor.subscribe('games');                                           // 15
  Meteor.subscribe('users');                                           // 16
}                                                                      //
                                                                       //
Meteor.methods({                                                       // 19
  createGame: function (otherPlayerId) {                               // 20
    var game = GameFactory.createGame([Meteor.userId(), otherPlayerId]);
    Games.insert(game);                                                // 22
  },                                                                   //
  takeTurn: function (gameId, id, card) {                              // 24
    var game = Games.findOne(gameId),                                  // 25
        hand = game.players[id].hand;                                  //
  }                                                                    //
                                                                       //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=games.js.map
