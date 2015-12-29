(function(){
Template.__checkName("signup");
Template["signup"] = new Template("Template.signup", (function() {
  var view = this;
  return HTML.Raw('<form>\n    <h1> Sign up </h1>\n    <input type="text" id="su-email" placeholder="Email Adress">\n    <input type="text" id="su-username" placeholder="Username">\n    <input type="password" id="su-password" placeholder="Password">\n    <button> Sign Up</button>\n  </form>');
}));

Template.__checkName("login");
Template["login"] = new Template("Template.login", (function() {
  var view = this;
  return HTML.Raw('<form>\n    <h1> Log In </h1>\n    <input type="text" id="li-username" placeholder="Username">\n    <input type="password" id="li-password" placeholder="Password">\n    <button> Log In</button>\n  </form>');
}));

Template.__checkName("logout");
Template["logout"] = new Template("Template.logout", (function() {
  var view = this;
  return HTML.FORM("\n    (", Blaze.View("lookup:currentUser.username", function() {
    return Spacebars.mustache(Spacebars.dot(view.lookup("currentUser"), "username"));
  }), HTML.Raw(")\n    <button> Log Out</button>\n  "));
}));

Template.__checkName("signupLogin");
Template["signupLogin"] = new Template("Template.signupLogin", (function() {
  var view = this;
  return HTML.DIV({
    id: "login"
  }, "\n  ", Blaze.If(function() {
    return Spacebars.call(view.lookup("loggingIn"));
  }, function() {
    return "\n    Loggin in ...\n  ";
  }, function() {
    return [ "\n    ", Blaze.If(function() {
      return Spacebars.call(view.lookup("currentUser"));
    }, function() {
      return [ "\n      ", Spacebars.include(view.lookupTemplate("logout")), "\n    " ];
    }, function() {
      return [ "\n      ", Spacebars.include(view.lookupTemplate("signup")), "\n      ", Spacebars.include(view.lookupTemplate("login")), "\n    " ];
    }), "\n  " ];
  }), "\n");
}));

}).call(this);
