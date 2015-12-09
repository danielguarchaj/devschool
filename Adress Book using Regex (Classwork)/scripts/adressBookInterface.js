$(document).ready(function(){
  disableButtonSubmit();
  disableButtonDelete();
  disableButtonEdit();

  $("form").on("keyup", "input#inputFirstName", function(){
    if(validateNames($(this).val())){
      enableButtonSubmit();
    } else {
      disableButtonSubmit();
    }
  })

  $("form").on("keyup", "input#inputMiddleInitial", function(){
    if(validateNames($(this).val())){
      enableButtonSubmit();
    } else {
      disableButtonSubmit();
    }
  })

  $("form").on("keyup", "input#inputLastName", function(){
    if(validateNames($(this).val())){
      enableButtonSubmit();
    } else {
      disableButtonSubmit();
    }
  })

  $("form").on("keyup", "input#inputPersonalEmail", function(){
    if(validateEmail($(this).val())){
      enableButtonSubmit();
    } else {
      disableButtonSubmit();
    }
  })

  $("form").on("keyup", "input#inputBusinessEmail", function(){
    if(validateEmail($(this).val())){
      enableButtonSubmit();
    } else {
      disableButtonSubmit();
    }
  })

  $("form").on("keyup", "input#inputMobile", function(){
    if(validatePhone($(this).val())){
      enableButtonSubmit();
    } else {
      disableButtonSubmit();
    }
  })

  $("form").on("keyup", "input#inputHome", function(){
    if(validatePhone($(this).val())){
      enableButtonSubmit();
    } else {
      disableButtonSubmit();
    }
  })

  $("form").on("keyup", "input#inputWork", function(){
    if(validatePhone($(this).val())){
      enableButtonSubmit();
    } else {
      disableButtonSubmit();
    }
  })

  $("form").on("keyup", "input#inputBusinessEmail", function(){
    if(validateEmail($(this).val())){
      enableButtonSubmit();
    } else {
      disableButtonSubmit();
    }
  })

  $("form").on("keyup", "input#inputStreetAdress", function(){
    if(validateStreetAddress($(this).val())){
      enableButtonSubmit();
    } else {
      disableButtonSubmit();
    }
  })

  $("button#buttonSubmit").on("click",function(event){
    event.preventDefault();
  })




})
