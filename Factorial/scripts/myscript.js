$(document).ready(function(){

  function factorial(number){
    var result=1;
    for(var i=number; i>0; i--){
      result = result * i;
    }
    return result;
  }

  $("form").on("submit", function(event){
    event.preventDefault();

    var n = parseInt($("input#factorialOf").val());
    var res = factorial(n);

    $("span#factorial").text(n);
    $("span#result").text(res);


  })

})
