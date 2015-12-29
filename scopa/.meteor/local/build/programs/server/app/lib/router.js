(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// lib/router.js                                                       //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Router.configure({                                                     // 1
	layoutTemplate: 'layout'                                              // 2
});                                                                    //
                                                                       //
Router.map(function () {                                               // 5
	this.route('home', { path: '/' });                                    // 6
	this.route('play', {                                                  // 7
		path: '/game/:_id',                                                  // 8
		data: function () {                                                  // 9
			var game = Games.findOne(this.params._id);                          // 10
                                                                       //
			if (game) {                                                         // 12
				game.player = game.players[Meteor.userId()];                       // 13
				game.yourTurn = game.currentTurn[0] === Meteor.userId();           // 14
                                                                       //
				var otherId = game.currentTurn[game.yourTurn ? 1 : 0];             // 16
				game.otherPlayer = {                                               // 17
					username: Meteor.users.findOne(otherId).username,                 // 18
					score: game.players[otherId].score                                // 19
				};                                                                 //
				return game;                                                       // 21
			}                                                                   //
			return {};                                                          // 23
		}                                                                    //
	});                                                                   //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=router.js.map
