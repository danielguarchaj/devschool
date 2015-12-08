$(document).ready(function(){

  function getPosContent(pos){

    if(pos===1){
      return 0;
    }else if(pos<=3){
      return 1;
    }else{
      return getPosContent(pos-1)+getPosContent(pos-2);
    }
  }

  $("form").on("submit", function(event){
    event.preventDefault();

    var posN = parseInt($("input#positionIn").val());
    var res = getPosContent(posN);
    $("span#position").text(posN);
    $("span#content").text(res);
  })

})
