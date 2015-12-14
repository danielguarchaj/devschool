var accounts = [];
var trackingAccount = [];
var objectCuentaUsuario = {};
var cuenta;
var usuario;
var posUser = 0;


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

  cuenta = new Account(parseInt(balance));
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

  var loginName = $("input#inputNameLogin").val();
  var loginPin = $("input#inputPinLogin").val();
  var username, userpin;
  for(var i=0; i<accounts.length; i++){
    username = accounts[i].usuario.name;
    userpin = accounts[i].usuario.pin;
      if((loginName === username) && (loginPin === userpin)){
        posUser = i;
        return true;
      }
  }
}

var logIn = function(){
    $("span#accountOwner").text(accounts[posUser].usuario.name+"'s ");
    $("span#currentBalance").text(accounts[posUser].cuenta.balance);
    $("#newAccountDiv").hide();
    $("#logInAccountDiv").hide();
    $("#transfersDiv").show();
    getHistory();
}

var getHistory = function(){
  $("#transferRow").find("tr:gt(0)").remove();
  for(var i=0; i<accounts[posUser].usuario.history.length; i++){
    $('#transferRow tr:last').after('<tr> <td>'+accounts[posUser].usuario.history[i].newBalance+'</td> <td>'+ accounts[posUser].usuario.history[i].amount+
    '</td> <td>'+ accounts[posUser].usuario.history[i].memo +'</td> </tr>');
  }
}
