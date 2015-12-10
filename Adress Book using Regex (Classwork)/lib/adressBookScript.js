var validateAll = false;
var myContacts = [];
var contacts = 0;
var firstName, middleInitial, lastName, personalEmail, businessEmail, mobilePhone, homePhone, businessPhone, streetAddres, unitNum, city, country, zip, comm;

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

  var validateUnitNumber = function (unitNumber){
  var validateUnit = /^[\S]*$/;
  return validateUnit.test(unitNumber);
}

  var validateCity = function (cityName){
  var validateCityName = /^[A-Z+a-z\s]*$/;
  return validateCityName.test(cityName);
  }

  var validateComment = function (comment){
  var validateCom = /^[\w\s\W]*$/;
  return validateCom.test(comment);
  }

  var addContact = function(newContact){
    myContacts.push(newContact);
    contacts++;
  }

  var confirmMessage = function (){
    var r = confirm("Press a button");
    return r;
  }

  var getContactDetails = function (contactIndex){




  }
