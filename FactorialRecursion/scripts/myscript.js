$(document).ready(function(){

  function factorialRecursion(number){
    if(number==0){
      return 1;
    }else{
      return number * factorialRecursion(number-1);
    }
  }

  $("form").on("submit", function(event){
    event.preventDefault();

    var n = parseInt($("input#factorialOf").val());
    var res = factorialRecursion(n);

    $("span#factorial").text(n);
    $("span#result").text(res);

  })

})
