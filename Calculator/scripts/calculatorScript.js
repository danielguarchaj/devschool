$(document).ready(function(){

  $("button#btnResult").on("click",function(){
    var myInput = $("input#currentInput").val();
    console.log(myInput);
  })

  $("button#btnMult").on("click",function(){
    $("input#currentInput").val(botonOperacion("x"));
  })

  $("button#btnDivi").on("click",function(){
    $("input#currentInput").val(botonOperacion("/"));
  })

  $("button#btnSum").on("click",function(){
    $("input#currentInput").val(botonOperacion("+"));
  })

  $("button#btnRest").on("click",function(){
    $("input#currentInput").val(botonOperacion("-"));
  })

  $("button#btnOne").on("click",function(){
    $("input#currentInput").val(agregarCaracter("1"));
  })

  $("button#btnTwo").on("click",function(){
    $("input#currentInput").val(agregarCaracter("2"));
  })

  $("button#btnThree").on("click",function(){
    $("input#currentInput").val(agregarCaracter("3"));
  })

  $("button#btnFour").on("click",function(){
    $("input#currentInput").val(agregarCaracter("4"));
  })

  $("button#btnFive").on("click",function(){
    $("input#currentInput").val(agregarCaracter("5"));
  })

  $("button#btnSix").on("click",function(){
    $("input#currentInput").val(agregarCaracter("6"));
  })

  $("button#btnSeven").on("click",function(){
    $("input#currentInput").val(agregarCaracter("7"));
  })

  $("button#btnEight").on("click",function(){
    $("input#currentInput").val(agregarCaracter("8"));
  })

  $("button#btnNine").on("click",function(){
    $("input#currentInput").val(agregarCaracter("9"));
  })

  $("button#btnZero").on("click",function(){
    $("input#currentInput").val(agregarCaracter("0"));
  })

  $("button#btnReset").on("click",function(){
    $("input#currentInput").val("");
    botonOperacion("C");
  })

  $("button#btnResult").on("click",function(){
    $("input#currentInput").val(calcularResultado("="));
  })

})
