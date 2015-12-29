(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// gameCreation.js                                                     //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
GameFactory = {};                                                      // 1
                                                                       //
GameFactory.createGame = function (playerIds) {                        // 3
  var deck = createDeck(),                                             // 4
      players = createPlayers(playerIds);                              //
                                                                       //
  GameFactory.dealPlayers(players, deck);                              // 7
  var table = dealTable(deck);                                         // 8
                                                                       //
  return {                                                             // 10
    deck: deck,                                                        // 11
    players: players,                                                  // 12
    table: table,                                                      // 13
    currentTurn: playerIds,                                            // 14
    inProgress: true,                                                  // 15
    started: new Date()                                                // 16
  };                                                                   //
};                                                                     //
                                                                       //
GameFactory.dealPlayers = function (players, deck) {                   // 20
  for (var i = 0; i < 3; i++) {                                        // 21
    Object.keys(players).forEach(function (id) {                       // 22
      players[id].hand.push(deck.shift());                             // 23
    });                                                                //
  }                                                                    //
};                                                                     //
                                                                       //
function dealTable(deck) {                                             // 28
  var c = deck.shift.bind(deck);                                       // 29
  return [c(), c(), c(), c()];                                         // 30
}                                                                      //
                                                                       //
function createPlayers(ids) {                                          // 33
  var o = {};                                                          // 34
                                                                       //
  ids.forEach(function (id) {                                          // 36
    o[id] = {                                                          // 37
      hand: [],                                                        // 38
      pile: [],                                                        // 39
      score: {                                                         // 40
        mostCoins: 0,                                                  // 41
        mostCards: 0,                                                  // 42
        setteBello: 0,                                                 // 43
        primera: 0,                                                    // 44
        scopa: 0                                                       // 45
      }                                                                //
    };                                                                 //
  });                                                                  //
  return o;                                                            // 49
}                                                                      //
                                                                       //
function createDeck() {                                                // 52
  var suits = ['Cups', 'Coins', 'Swords', 'Clubs'];                    // 53
  cards = [];                                                          // 54
  suits.forEach(function (suit) {                                      // 55
    for (var i = 1; i <= 10; i++) {                                    // 56
      var name = i;                                                    // 57
      if (i === 1) name = 'A';                                         // 58
      if (i === 8) name = 'N';                                         // 59
      if (i === 8) name = 'Q';                                         // 60
      if (i === 10) name = 'K';                                        // 61
      cards.push({                                                     // 62
        suit: suit,                                                    // 63
        value: i,                                                      // 64
        name: name                                                     // 65
      });                                                              //
    }                                                                  //
  });                                                                  //
                                                                       //
  return _.shuffle(cards);                                             // 70
}                                                                      //
/////////////////////////////////////////////////////////////////////////

}).call(this);
