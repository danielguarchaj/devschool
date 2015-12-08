var resultado = 0;
var tipoOperacion = "";
var display = "";
var siguiente = "";
var nuevaOperacion = true;

var agregarCaracter = function(caracter) {
  nuevaOperacion = false;
  // debugger
  if(display === "" || nuevaOperacion === true){
    //arreglo.push(caracter);
    // return display = arreglo.join("");
    display = caracter;
  }else{
    //arreglo.push(caracter);
    // return display = arreglo.join("");
    display += caracter;
  }
  return display;
}

var botonOperacion = function(operacion){
  // debugger
  nuevaOperacion=true;
  if(operacion==="="){
    calcularResultado();
  }else if(operacion==="C"){
    resultado = 0;
    display = "";
    //arreglo = "";
    nuevaOperacion = true;
    siguiente = "";
  }else{
    tipoOperacion = operacion;
    siguiente = display;
    display = "";
    if(resultado > 0 && !nuevaOperacion){
      calcularResultado();
    }else{
      return resultado = parseInt(siguiente);
    }
  }
}

var calcularResultado = function (){
  // debugger
  if(tipoOperacion==="+"){
    resultado += parseInt(display);

  }else if(tipoOperacion==="-"){
    resultado -= parseInt(display);

  }else if(tipoOperacion==="/"){
    resultado /= parseInt(display);

  }else if(tipoOperacion==="x"){
    resultado *= parseInt(display);

  }
  display = ""+resultado.toString();
  tipoOperacion = "";
  return resultado.toString();
}
