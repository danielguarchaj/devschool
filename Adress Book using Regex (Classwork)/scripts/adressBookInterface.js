$(document).ready(function(){

  disableButtonSubmit();
  $("#buttonSubmit").fadeIn();

  $("form").on("keyup", "input#inputFirstName", function(){
    firstName = $(this).val();
    if(validateNames($(this).val())){
      enableButtonSubmit();
    } else {
      disableButtonSubmit();
    }
  })

  $("form").on("keyup", "input#inputMiddleInitial", function(){
    middleInitial = $(this).val();
    if(validateNames($(this).val())){
      enableButtonSubmit();
    } else {
      disableButtonSubmit();
    }
  })

  $("form").on("keyup", "input#inputLastName", function(){
    lastName = $(this).val();
    if(validateNames($(this).val())){
      enableButtonSubmit();
    } else {
      disableButtonSubmit();
    }
  })

  $("form").on("keyup", "input#inputPersonalEmail", function(){
    personalEmail = $(this).val();
    if(validateEmail($(this).val())){
      enableButtonSubmit();
    } else {
      disableButtonSubmit();
    }
  })

  $("form").on("keyup", "input#inputBusinessEmail", function(){
    businessEmail = $(this).val();
    if(validateEmail($(this).val())){
      enableButtonSubmit();
    } else {
      disableButtonSubmit();
    }
  })

  $("form").on("keyup", "input#inputMobile", function(){
    mobilePhone = $(this).val();
    if(validatePhone($(this).val())){
      enableButtonSubmit();
    } else {
      disableButtonSubmit();
    }
  })

  $("form").on("keyup", "input#inputHome", function(){
    homePhone = $(this).val();
    if(validatePhone($(this).val())){
      enableButtonSubmit();
    } else {
      disableButtonSubmit();
    }
  })

  $("form").on("keyup", "input#inputWork", function(){
    businessPhone = $(this).val();
    if(validatePhone($(this).val())){
      enableButtonSubmit();
    } else {
      disableButtonSubmit();
    }
  })

  $("form").on("keyup", "input#inputStreetAdress", function(){
    streetAddres = $(this).val();
    if(validateStreetAddress($(this).val())){
      enableButtonSubmit();
    } else {
      disableButtonSubmit();
    }
  })

  $("form").on("keyup", "input#inputUnitNumber", function(){
    unitNum = $(this).val();
    if(validateUnitNumber($(this).val())){
      enableButtonSubmit();
    } else {
      disableButtonSubmit();
    }
  })

  $("form").on("keyup", "input#inputCity", function(){
    city = $(this).val();
    if(validateCity($(this).val())){
      enableButtonSubmit();
    } else {
      disableButtonSubmit();
    }
  })

  $("form").on("keyup", "input#inputCountry", function(){
    country = $(this).val();
    if(validateCity($(this).val())){
      enableButtonSubmit();
    } else {
      disableButtonSubmit();
    }
  })

  $("form").on("keyup", "input#inputZip", function(){
    zip = $(this).val();
    if(validatePhone($(this).val())){
      enableButtonSubmit();
    } else {
      disableButtonSubmit();
    }
  })

  $("form").on("keyup", "input#inputComment", function(){
    comm = $(this).val();
    if(validateComment($(this).val())){
      enableButtonSubmit();
    } else {
      disableButtonSubmit();
    }
  })

  $("button#buttonSubmit").on("click",function(event){
    event.preventDefault();
    var objectContact = {firstName, middleInitial, lastName, personalEmail, businessEmail, mobilePhone, homePhone, businessPhone, streetAddres, unitNum, city, country, zip, comm};
    addContact(objectContact);
    cleanInputs();
    $('#contactRow tr:last').after('<tr> <td>'+myContacts[contact].firstName+'</td> <td>'+ myContacts[contact].personalEmail+'</td> <td>'+ myContacts[contact].businessEmail +'</td> <td>'+ myContacts[contact].mobilePhone +'</td> <td>'
    + myContacts[contact].homePhone +'</td> <td>'+ myContacts[contact].businessPhone +'</td> <td><button type="button" class="btn btn-success view-details" id="'+contact+'">View Details</button></td> </tr>');
    //contact++;
    disableButtonSubmit();
    console.log(myContacts);
    console.log(contact);
  })

  $("button#buttonDelete").on("click", function(){
    if(confirmMessage()){
      alert("Contact deleted!")
    }
    $("#buttonSubmit").fadeIn();
    $("#buttonView").fadeIn();
    $("#selectContact").fadeOut();
    $("#buttonEdit").fadeOut();
    $(this).fadeOut();
    cleanInputs();
  })
  $("button#buttonEdit").on("click",function(){
    if(confirmMessage()){
      alert("Contact edited!")
    }
    $("#buttonSubmit").fadeIn();
    $("#buttonView").fadeIn();
    $("#selectContact").fadeOut();
    $("#buttonDelete").fadeOut();
    $(this).fadeOut();
    cleanInputs();
  })
  $("body").on("click", ".view-details", function(e){
    e.preventDefault();
    getContactDetails(parseInt($(this).attr('id')));
    $("#buttonEdit").fadeIn();
    $("#buttonDelete").fadeIn();
    $("#selectContact").fadeIn();
    $("#buttonSubmit").fadeOut();
  });

})
