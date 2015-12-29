(function(){
Template.__checkName("play");
Template["play"] = new Template("Template.play", (function() {
  var view = this;
  return [ Spacebars.include(view.lookupTemplate("signupLogin")), "\n  ", Blaze.If(function() {
    return Spacebars.call(view.lookup("currentUser"));
  }, function() {
    return [ "\n    ", Spacebars.include(view.lookupTemplate("status")), "\n    ", Blaze.If(function() {
      return Spacebars.call(view.lookup("inProgress"));
    }, function() {
      return [ "\n      ", Spacebars.include(view.lookupTemplate("table")), "\n      ", Spacebars.include(view.lookupTemplate("hand")), "\n    " ];
    }), "\n    ", Spacebars.include(view.lookupTemplate("pile")), "\n  " ];
  }) ];
}));

Template.__checkName("status");
Template["status"] = new Template("Template.status", (function() {
  var view = this;
  return [ HTML.Raw('<p> <a href="/">_&larr; Home </a> </p>\n  '), HTML.H2(" Game between you and ", Blaze.View("lookup:otherPlayer.username", function() {
    return Spacebars.mustache(Spacebars.dot(view.lookup("otherPlayer"), "username"));
  }), " ", Blaze.If(function() {
    return Spacebars.call(view.lookup("inProgress"));
  }, function() {
    return [ " ", Blaze.If(function() {
      return Spacebars.call(view.lookup("yourTurn"));
    }, function() {
      return " (Your Turn) ";
    }), " " ];
  }), " ") ];
}));

Template.__checkName("table");
Template["table"] = new Template("Template.table", (function() {
  var view = this;
  return HTML.DIV({
    id: "table"
  }, HTML.Raw("\n    <h2>Table</h2>\n    "), Blaze.Each(function() {
    return Spacebars.call(view.lookup("table"));
  }, function() {
    return [ "\n    ", HTML.DIV({
      "class": function() {
        return [ "card ", Spacebars.mustache(view.lookup("suit")) ];
      }
    }, "\n      ", HTML.DIV(Blaze.View("lookup:name", function() {
      return Spacebars.mustache(view.lookup("name"));
    })), "\n      ", HTML.DIV(Blaze.View("lookup:suit", function() {
      return Spacebars.mustache(view.lookup("suit"));
    })), "\n    "), "\n    " ];
  }), "\n  ");
}));

Template.__checkName("hand");
Template["hand"] = new Template("Template.hand", (function() {
  var view = this;
  return HTML.DIV({
    id: "hand"
  }, HTML.Raw("\n    <h2>Hand</h2>\n    "), Blaze.Each(function() {
    return Spacebars.call(Spacebars.dot(view.lookup("player"), "hand"));
  }, function() {
    return [ "\n    ", HTML.DIV({
      "class": function() {
        return [ "card ", Spacebars.mustache(view.lookup("suit")) ];
      }
    }, "\n      ", HTML.DIV(Blaze.View("lookup:name", function() {
      return Spacebars.mustache(view.lookup("name"));
    })), "\n      ", HTML.DIV(Blaze.View("lookup:suit", function() {
      return Spacebars.mustache(view.lookup("suit"));
    })), "\n    "), "\n    " ];
  }), "\n  ");
}));

Template.__checkName("pile");
Template["pile"] = new Template("Template.pile", (function() {
  var view = this;
  return HTML.DIV({
    id: "pile"
  }, HTML.Raw("\n    <h2> Collected Cards </h2>\n    "), HTML.UL("\n      ", Blaze.Each(function() {
    return Spacebars.call(Spacebars.dot(view.lookup("player"), "pile"));
  }, function() {
    return [ "\n        ", HTML.LI(Blaze.View("lookup:name", function() {
      return Spacebars.mustache(view.lookup("name"));
    }), " of ", Blaze.View("lookup:suit", function() {
      return Spacebars.mustache(view.lookup("suit"));
    })), "\n      " ];
  }), "\n    "), "\n  ");
}));

}).call(this);
