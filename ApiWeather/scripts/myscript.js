$(document).ready(function(){

    var apiKey = "&APPID=025abfe602c79e92f4aab34daca7f7a1";

    var apiUrl = "http://api.openweathermap.org/data/2.5/forecast/daily?q=";

    $("button#forecast").on("click", function(){

      var city = $("input#city").val();

      if($('input:radio[name=days]:checked').val()==="1"){
        $("span#forecastDays").text("One Day");
        $.get(apiUrl + city + "&cnt=1&APPID=" + apiKey, function(data){
          console.log(data)
          var tempMin = toCelcius(data.list[0].temp.min);
          var tempMax = toCelcius(data.list[0].temp.max);
          $("ol.myCity").append("<li>"+city + " - Temp Min: "+tempMin+" 0C to Max "+tempMax+" 0C - Wind Speed "+data.list[0].speed+" m/s</li>");
        })
      } else if($('input:radio[name=days]:checked').val()==="5"){
        $("span#forecastDays").text("Five Days / daily forecast data");
        $.get(apiUrl + city + "&cnt=5&APPID=" + apiKey, function(data){
          for(var i=0; i<5; i++){
          console.log(data)
          var tempMin = toCelcius(data.list[i].temp.min);
          var tempMax = toCelcius(data.list[i].temp.max);
          $("ol.myCity").append("<li>"+city + " - Temp Min: "+tempMin+" 0C to Max "+tempMax+" 0C - Wind Speed "+data.list[i].speed+" m/s</li>");
        }
        })
      }else if($('input:radio[name=days]:checked').val()==="16"){
        $("span#forecastDays").text("Sixteen Days / daily forecast data");
        $.get(apiUrl + city + "&cnt=16&APPID=" + apiKey, function(data){
          for(var i=0; i<16; i++){
          console.log(data)
          var tempMin = toCelcius(data.list[i].temp.min);
          var tempMax = toCelcius(data.list[i].temp.max);
          $("ol.myCity").append("<li>"+city + " - Temp Min: "+tempMin+" 0C to Max "+tempMax+" 0C - Wind Speed "+data.list[i].speed+" m/s</li>");
        }
        })
      }else{
        $("span#forecastDays").text("Must choose one option!");
      }

    })

    $("button#reset").on("click",function(){
      $("ol.myCity").empty();
      $("span#forecastDays").text("");
      $("input#city").val("");
    })

  })
