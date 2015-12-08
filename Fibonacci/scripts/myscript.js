$(document).ready(function(){

  function getPosContent(pos){
    var fibonacci=0;
    var aux=1;
    var suma;
    var cont=1;
    debugger
    while(cont<pos){
        suma=fibonacci+aux;
        fibonacci = aux;
        aux = suma;
        cont++
    }
    return fibonacci;
  }

  $("form").on("submit", function(event){
    event.preventDefault();

    var posN = parseInt($("input#positionIn").val());
    var res = getPosContent(posN);
    $("span#position").text(posN);
    $("span#content").text(res);
  })

})
