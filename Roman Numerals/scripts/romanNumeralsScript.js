$(document).ready(function(){
  $("form").on("submit", function(event){
    event.preventDefault();
    var decimal = parseInt($("input#decimalInput").val());
    var roman = "";
    var M, D, C, L, X, V, I;
    $("span#originalDecimal").text(decimal);
    if(decimal>3999||decimal<1){
      roman="The Number Is Out Of Range 1-3999"
    }else{
      M = parseInt(decimal/1000);
      decimal = decimal%1000;
      if(M!=0){
        for(var i=0; i<M; i++)
          roman+="M"
      }
      D = parseInt(decimal/500);
      decimal = decimal%500;
      if(D!=0){
        for(var i=0; i<D; i++){
          roman+="D"
        }
      }
      C = parseInt(decimal/100);
      decimal = decimal%100;
      if(C!=0){
        if(C===4){
          roman+="CD"
        }else{
        for(var i=0; i<C; i++){
          roman+="C"
        }
        }
      }
      L = parseInt(decimal/50);
      decimal = decimal%50;
      if(L!=0){
        for(var i=0; i<L; i++){
          roman+="L"
        }
      }
      X = parseInt(decimal/10);
      decimal = decimal%10;
      if(X!=0){
        if(X===4){
          roman+="XL"
        }else{
        for(var i=0; i<X; i++){
          roman+="X"
        }
      }
      }

      V = parseInt(decimal/5);
      decimal = decimal%5;
      if(V!=0){
        for(var i=0; i<V; i++){
          roman+="V"
        }
      }
      I = parseInt(decimal);
      if(I!=0){
        if(I===4){
          roman+="IV"
        }else{
        for(var i=0; i<I; i++){
          roman+="I"
        }
      }
      }
    }

    $("span#convertedDecimal").text(roman);
  })
})
