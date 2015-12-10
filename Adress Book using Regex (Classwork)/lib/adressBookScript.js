
var myContacts = [];
var contact = 0;
var firstName, middleInitial, lastName, personalEmail, businessEmail, mobilePhone, homePhone, businessPhone, streetAddres, unitNum, city, country, zip, comm;

var disableButtonSubmit = function(){
  $("button#buttonSubmit").attr("disabled", "disabled");

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

var cleanInputs = function (){

  $("input#inputFirstName").val("");
  $("input#inputMiddleInitial").val("");
  $("input#inputLastName").val("");
  $("input#inputPersonalEmail").val("");
  $("input#inputBusinessEmail").val("");
  $("input#inputMobile").val("");
  $("input#inputHome").val("");
  $("input#inputWork").val("");
  $("input#inputStreetAdress").val("");
  $("input#inputUnitNumber").val("");
  $("input#inputCity").val("");
  $("input#inputCountry").val("");
  $("input#inputZip").val("");
  $("input#inputComment").val("");

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
    contact = myContacts.push(newContact);
    //contacts++;
  }

  var deleteContact = function(contactIndex){
    // myFish is ['angel', 'clown', 'drum', 'mandarin', 'surgeon']
    // removes 1 element from index 3
    // removed = myFish.splice(3, 1);
    // myFish is ['angel', 'clown', 'drum', 'surgeon']
    // removed is ['mandarin']



  }

  var fillContactsTable = function(){
    $("#contactRow").find("tr:gt(0)").remove();
    for(var i=0; i<contact; i++){
      $('#contactRow tr:last').after('<tr> <td>'+myContacts[i].firstName+'</td> <td>'+ myContacts[i].personalEmail+
      '</td> <td>'+ myContacts[i].businessEmail +'</td> <td>'+ myContacts[i].mobilePhone +'</td> <td>'
      + myContacts[i].homePhone +'</td> <td>'+ myContacts[i].businessPhone +
      '</td> <td><button type="button" class="btn btn-success view-details" id="'+i+'">View Details</button></td> </tr>');
    }


  }

  var confirmMessage = function (){
    var r = confirm("Press a button");
    return r;
  }

  var getContactDetails = function (contactIndex){

    $("input#inputFirstName").val(myContacts[contactIndex].firstName);
    $("input#inputMiddleInitial").val(myContacts[contactIndex].middleInitial);
    $("input#inputLastName").val(myContacts[contactIndex].lastName);
    $("input#inputPersonalEmail").val(myContacts[contactIndex].personalEmail);
    $("input#inputBusinessEmail").val(myContacts[contactIndex].businessEmail);
    $("input#inputMobile").val(myContacts[contactIndex].mobilePhone);
    $("input#inputHome").val(myContacts[contactIndex].homePhone);
    $("input#inputWork").val(myContacts[contactIndex].businessPhone);
    $("input#inputStreetAdress").val(myContacts[contactIndex].streetAddres);
    $("input#inputUnitNumber").val(myContacts[contactIndex].unitNum);
    $("input#inputCity").val(myContacts[contactIndex].city);
    $("input#inputCountry").val(myContacts[contactIndex].country);
    $("input#inputZip").val(myContacts[contactIndex].zip);
    $("input#inputComment").val(myContacts[contactIndex].comm);

  }
