/*
trackingAccount
[Object]
trackingAccount[0].nuevaCuenta;
Account {balance: "222"}
trackingAccount[0].nuevoUsuario;
User {name: "Daniel", pin: "222"}
trackingAccount[0].nuevoUsuario.name;
"Daniel"
trackingAccount[0].nuevoUsuario.pin;
"222"
*/
var accounts = [];
var trackingAccount = [];
var objectCuentaUsuario = {};
var cuenta;
var usuario;

var cleanFieldsNewAccount = function(){
  $("input#inputBeginningBalance").val("");
  $("input#inputOwnerName").val("");
  $("input#inputPin").val("");
}
var cleanFliedsLogIn = function(){
  $("input#inputNameLogin").val("");
  $("input#inputPinLogin").val("");
}

var cleanFieldsTransfers = function(){
  $("input#inputAmount").val("");
  $("input#inputMemo").val("");
}

var addAccount = function(name, balance, pin){

  cuenta = new Account(balance);
  usuario = new User(name, pin);
  objectCuentaUsuario = {cuenta, usuario};
  accounts.push(objectCuentaUsuario);
  console.log(accounts);

}

var logOut = function(){

  $("#transferRow").find("tr:gt(0)").remove();
  $("#newAccountDiv").show();
  $("#logInAccountDiv").show();
  $("#transfersDiv").hide();

}

var checkLogIn = function(){
  // $("#newAccountDiv").hide();
  // $("#logInAccountDiv").hide();
  // $("#transfersDiv").show();
  var loginName = $("input#inputNameLogin").val();
  var loginPin = $("input#inputPinLogin").val();
  //var loginCorrecto = false;
  for(var i=0; i<accounts.length; i++){
  if(loginName === accounts[i].usuario.name && loginPin === accounts[i].usuario.pin)
    return true;
  }
}

var logIn = function(){

    $("#newAccountDiv").hide();
    $("#logInAccountDiv").hide();
    $("#transfersDiv").show();

}

var deposit = function(){


}

var retire = function(){


}
