var validateAll = false;

var disableButtonSubmit = function(){
  $("button#buttonSubmit").attr("disabled", "disabled");
  validateAll = false;
  console.log("button submit disabled");
}

var disableButtonDelete = function(){
  $("button#buttonDelete").attr("disabled", "disabled");
  console.log("button delete disabled");
}

var disableButtonEdit = function(){
  $("button#buttonEdit").attr("disabled", "disabled");
  console.log("button edit disabled");
}

var enableButtonSubmit = function(){
  $("button#buttonSubmit").removeAttr("disabled");
  validateAll = true;
  console.log("button submit enabled");
}

var enableButtonDelete = function(){
  $("button#buttonDelete").removeAttr("disabled");
  console.log("button delete enabled");
}

var enableButtonEdit = function(){
  $("button#buttonEdit").removeAttr("disabled");
  console.log("button edit enabled");
}

var validateNames = function (name){
  var validatedName = /^[a-zA-Z\s]*$/;
  return validatedName.test(name);
}

var validateEmail = function (email){
  var validateEmail = /^[\w+@\w+\.\w+]*$/;
  return validateEmail.test(email);
}

var validatePhone = function (number){
  var validateDigits = /^[\d]*$/;
  return validateDigits.test(number);
}

  var validateStreetAddress = function (address){
  var validateAddress = /^[a-zA-Z\s.*0-9-*]*$/;
  return validateAddress.test(address);
}
