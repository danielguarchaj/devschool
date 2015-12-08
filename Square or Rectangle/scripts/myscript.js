$(document).ready(function(){

  function squareOrRectangle(sideA, sideB){
    if (sideA > 0 && sideB > 0){
      if(sideA === sideB){
        return "square";
      } else {
        return "rectangle";
      }
    } else {
      return "invalid input";
    }
  }

  $("form").on("submit", function(event){
    event.preventDefault();

    var sideA = parseInt($("input#side-a").val());
    var sideB = parseInt($("input#side-b").val());

    var result = squareOrRectangle(sideA, sideB);

    $("span#result").text(sideA + " X " + sideB + " is a " + result);
  })
})
