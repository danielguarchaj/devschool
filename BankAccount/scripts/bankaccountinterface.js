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
  var amount = $("input#inputAmount").val();
  var memo = $("input#inputMemo").val();
  nuevaCuenta.deposit(amount);
  nuevaCuenta.tracking(amount, "", memo);
})

$("button#buttonRetire").on("click", function(){

})

})
