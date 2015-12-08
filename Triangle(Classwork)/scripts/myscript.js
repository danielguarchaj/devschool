$(document).ready(function(){

  function triangleType(sideA, sideB, sideC){

    if(sideA===sideB && sideA===sideC && sideB===sideC){
      return "Equilateral";
    }else if(sideA!=sideB && sideA!=sideC && sideB!=sideC){
      return "Scalane"
    }
    else if(sideA===sideB || sideA===sideC || sideB===sideC){
      return "Isosceles"
    }

  }

  $("form").on("submit",function(event){
    event.preventDefault();
    var sideA=parseInt($("input#sideA").val());
    var sideB=parseInt($("input#sideB").val());
    var sideC=parseInt($("input#sideC").val());

    var type = triangleType(sideA, sideB, sideC);

    $("span#triangleType").text(type);

  })

})
