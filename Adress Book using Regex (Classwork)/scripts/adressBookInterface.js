$(document).ready(function(){

  disableButtonSubmit();
  //disableButtonDelete();
  //disableButtonEdit();
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

  // $("form").on("keyup", "input#inputBusinessEmail", function(){
  //   businessEmail = $(this).val();
  //   if(validateEmail($(this).val())){
  //     enableButtonSubmit();
  //   } else {
  //     disableButtonSubmit();
  //   }
  // })

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

  // $("img").on("click", function(){
  //   $(".eruptingVolcano").fadeIn();
  //   $(".normalVolcano").fadeOut();
  // })

  $("button#buttonSubmit").on("click",function(event){
    event.preventDefault();
    var objectContact = {firstName, middleInitial, lastName, personalEmail, businessEmail, mobilePhone, homePhone, businessPhone, streetAddres, unitNum, city, country, zip, comm};
    addContact(objectContact);
    console.log(myContacts);
    console.log(contacts);
    newButtonID = contacts -1;
    $('#contactRow tr:last').after('<tr> <td>'+myContacts[0].firstName+'</td> <td>'+ myContacts[0].personalEmail+'</td> <td>'+ myContacts[0].businessEmail +'</td> <td>'+ myContacts[0].mobilePhone +'</td> <td>'
    + myContacts[0].homePhone +'</td> <td>'+ myContacts[0].businessPhone +'</td> <td><button type="button" class="btn btn-success view-details" id="'+newButtonID+'">View Details</button></td> </tr>');
  })

  $("button#buttonView").on("click",function(){
    $("#buttonEdit").fadeIn();
    $("#buttonDelete").fadeIn();
    $("#selectContact").fadeIn();
    $("#buttonSubmit").fadeOut();
    $(this).fadeOut();
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
  })
  $("body").on("click", ".view-details", function(e){
    e.preventDefault();
    var idButtonView = $(this).attr('id');

      $("#buttonEdit").fadeIn();
      $("#buttonDelete").fadeIn();
      $("#selectContact").fadeIn();
      $("#buttonSubmit").fadeOut();


    console.log(idButtonView);
  });

})
