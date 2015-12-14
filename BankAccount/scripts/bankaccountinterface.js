$(document).ready(function(){

$("#newAccountDiv").show();
$("#logInAccountDiv").show();

$("button#buttonNewAccount").on("click", function(){
  var newName = $("input#inputOwnerName").val();
  var newBalance = $("input#inputBeginningBalance").val();
  var newPin = $("input#inputPin").val();

  addAccount(newName, newBalance, newPin);
  cleanFieldsNewAccount();

})

$("button#buttonLogIn").on("click", function(){
  if(checkLogIn()){
    logIn();
  }else{
    alert("Incorrect name or pin!")
  }
  cleanFliedsLogIn();
})

$("button#buttonLogOut").on("click", function(){
  logOut();
})

$("button#buttonDeposit").on("click", function(){
  var amount = parseInt($("input#inputAmount").val());
  var memo = $("input#inputMemo").val();
  accounts[posUser].cuenta.deposit(amount);
  var newBalance = accounts[posUser].cuenta.balance;
  var objectTracking = {newBalance, amount, memo};
  accounts[posUser].usuario.tracking(objectTracking);
  console.log(objectTracking);
  cleanFieldsTransfers();
  getHistory();
  $("span#currentBalance").text(accounts[posUser].cuenta.balance);
})

$("button#buttonRetire").on("click", function(){
  var amount = parseInt($("input#inputAmount").val());
  var memo = $("input#inputMemo").val();

  if(accounts[posUser].cuenta.retire(amount)){
    var newBalance = accounts[posUser].cuenta.balance;
    var objectTracking = {newBalance, amount, memo};
    accounts[posUser].usuario.tracking(objectTracking);
    console.log(objectTracking);
    cleanFieldsTransfers();
    getHistory();
    $("span#currentBalance").text(accounts[posUser].cuenta.balance);
  }
})

})
