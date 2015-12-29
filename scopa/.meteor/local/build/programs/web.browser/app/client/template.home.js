(function(){
Template.__checkName("home");
Template["home"] = new Template("Template.home", (function() {
  var view = this;
  return [ Spacebars.include(view.lookupTemplate("signupLogin")), "\n	", Blaze.If(function() {
    return Spacebars.call(view.lookup("currentUser"));
  }, function() {
    return [ "\n		", Spacebars.include(view.lookupTemplate("gameList")), "\n		", Spacebars.include(view.lookupTemplate("userList")), "\n	" ];
  }) ];
}));

Template.__checkName("gameList");
Template["gameList"] = new Template("Template.gameList", (function() {
  var view = this;
  return HTML.DIV({
    "class": "column"
  }, HTML.Raw("\n	<h1>Games</h1>\n	"), HTML.UL("\n		", Blaze.Each(function() {
    return Spacebars.call(view.lookup("games"));
  }, function() {
    return [ "\n			", Spacebars.include(view.lookupTemplate("gameItem")), "\n		" ];
  }), "\n	"), "\n");
}));

Template.__checkName("gameItem");
Template["gameItem"] = new Template("Template.gameItem", (function() {
  var view = this;
  return HTML.LI("\n		", HTML.A({
    href: function() {
      return [ "/game/", Spacebars.mustache(view.lookup("_id")) ];
    }
  }, "Game with ", Blaze.View("lookup:otherPlayer", function() {
    return Spacebars.mustache(view.lookup("otherPlayer"));
  }), "\n			", HTML.SPAN("\n				", Blaze.If(function() {
    return Spacebars.call(view.lookup("inProgress"));
  }, function() {
    return [ "\n					", Blaze.View("lookup:started", function() {
      return Spacebars.mustache(view.lookup("started"));
    }), "\n				" ];
  }), "\n			"), "\n		"), "\n	");
}));

Template.__checkName("userList");
Template["userList"] = new Template("Template.userList", (function() {
  var view = this;
  return HTML.DIV({
    "class": "column"
  }, HTML.Raw("\n		<h1>Users</h1>\n		<p>Choose another user to star a game with them: </p>\n		"), HTML.UL("\n			", Blaze.Each(function() {
    return Spacebars.call(view.lookup("users"));
  }, function() {
    return [ "\n				", Spacebars.include(view.lookupTemplate("userItem")), "\n			" ];
  }), "\n		"), "\n	");
}));

Template.__checkName("userItem");
Template["userItem"] = new Template("Template.userItem", (function() {
  var view = this;
  return HTML.LI(HTML.BUTTON(Blaze.View("lookup:username", function() {
    return Spacebars.mustache(view.lookup("username"));
  })));
}));

}).call(this);
