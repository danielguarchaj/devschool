var cont = 0;
var tasksadded = [];
$(document).ready(function(){
  $("form#addItems").on("submit",function(event){
    event.preventDefault();
    $("h4#removedAlert").fadeOut();
    $("h4#finishedAlert").fadeOut();
    tasksadded[cont] = $("input#task").val();

    console.log("New Task Added: "+task);
    $("span#taskcounter").text(cont+1);
    $("ol.mytasks").append("<li>"+tasksadded[cont]+"</li>");
    cont++;
  })
  $("form#removeItems").on("submit", function(event){
    event.preventDefault();
    $("h4#finishedAlert").fadeOut();
    $("h4#removedAlert").fadeIn();
    var indexToRemove = parseInt($("input#taskToRemove").val());
    if(indexToRemove>tasksadded.length){//check if the index exists
      $("span#taskRemoved").text("The Index "+indexToRemove+" Does Not Exist!")
    }else{//if exists, remove the item from the array
      var newSize = tasksadded.length - 1;
      $("span#taskcounter").text(newSize);
      $("span#taskRemoved").text(tasksadded.splice(indexToRemove-1,1));
      $("ol.mytasks").empty();//empty the ol list
      for(var i=0; i<newSize; i++){//refill the ol list with the elements remain
        $("ol.mytasks").append("<li>"+tasksadded[i])+"</li>";
      }
    }
  })
  $("form#markAsDone").on("submit", function(event){
    event.preventDefault();
    $("h4#removedAlert").fadeOut();
    $("h4#finishedAlert").fadeIn();
    var indexToFinish = parseInt($("input#taskToFinish").val());
    if(indexToFinish>tasksadded.length){//check if the index exists
      $("span#taskFinished").text("The Index "+indexToFinish+" Does Not Exist!")
    }else{//if exists, mark the item from the array as done
      $("span#taskFinished").text(tasksadded[indexToFinish-1]+" Marked as done!");
      tasksadded[indexToFinish-1]+=" [DONE]"
      $("ol.mytasks").empty();//empty the ol list
      for(var i=0; i<cont; i++){//refill the ol list with the elements remain
        $("ol.mytasks").append("<li>"+tasksadded[i])+"</li>";
      }
    }
  })
})
