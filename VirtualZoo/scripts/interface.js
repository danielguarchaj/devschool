$(document).ready(function(){

  $("button#buttonAnimal1").on("click", function(){
    $("span#noise").text(mamifero1.noise);
  })
  $("button#buttonAnimal2").on("click", function(){
    $("span#noise").text(mamifero2.noise);
  })
  $("button#buttonAnimal3").on("click", function(){
    $("span#noise").text(mamifero3.noise);
  })
  $("button#buttonAnimal4").on("click", function(){
    $("span#noise").text(mamifero4.noise);
  })
  $("button#buttonAnimal5").on("click", function(){
    $("span#noise").text(mamifero5.noise);
  })

})
