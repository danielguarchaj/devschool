function Animal(){

  this.especie;
  this.nombre;
  this.tipoSangre;
  this.food;
  this.weight;
  this.noise;

  this.cambiarNombre = function (nuevoNombre){
    this.nombre = nuevoNombre;
  }

  this.cambiarSangre = function (nuevoSangre){
    this.tipoSangre = nuevoSangre;
  }

  this.cambiarComida = function (nuevoComida){
    this.food = nuevoComida;
  }

  this.cambiarPeso = function (nuevoPeso){
    this.weight = nuevoPeso;
  }

}

function Mamifero(nombre){
  Animal.apply(this, arguments);
}

function Oviparo(animal){
  Animal.apply(this, arguments);
}

var mamifero1 = new Mamifero();
var mamifero2 = new Mamifero();
var mamifero3 = new Mamifero();
var mamifero4 = new Mamifero();
var mamifero5 = new Mamifero();

mamifero1.noise = "Mooo";
mamifero2.noise = "Beee";
mamifero3.noise = "Woof woof!";
mamifero4.noise = "Miau";
mamifero5.noise = "rooaaar";
