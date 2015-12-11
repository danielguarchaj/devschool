$(document).ready(function(){
  disableButtonSubmit();
  $("#buttonSubmit").show();
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
    fillContactsTable();
    resetVariables();
    disableButtonSubmit();
    console.log(myContacts);
    console.log(contact);
  })
  $("button#buttonDelete").on("click", function(){
    if(confirmMessage()){
      deleteContact(contactSelected);
      fillContactsTable();
    alert("Contact deleted!")
    }
    $("#buttonSubmit").show();
    $("#buttonView").show();
    $("#selectContact").hide();
    $("#buttonEdit").hide();
    $(this).hide();
    cleanInputs();
    enableInputs();
  })
  $("button#buttonEdit").on("click",function(){
    enableInputs();
    $("button#buttonUpdate").show();
    $("button#buttonDelete").hide();
    $(this).hide();
  })
  $("button#buttonUpdate").on("click",function(){
    if(confirmMessage()){
      updateContact(contactSelected, getInputsData());
      fillContactsTable();
      alert("Contact updated!");
    }
    $("#buttonSubmit").show();
    $(this).hide();
    cleanInputs();
    enableInputs();
    resetVariables();
    disableButtonSubmit();
  })
  $("button#buttonCancel").on("click",function(){
  })
  $("body").on("click", ".view-details", function(e){
    e.preventDefault();
    disableInputs();
    contactSelected = parseInt($(this).attr('id'));
    getContactDetails(contactSelected);
    console.log("Index contact: "+contactSelected);
    $("#buttonEdit").show();
    $("#buttonDelete").show();
    $("#buttonSubmit").hide();
    $("buttonCancel").show();
  });
})
