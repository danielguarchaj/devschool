$(document).ready(function(){
    var apiKey = "025abfe602c79e92f4aab34daca7f7a1";
    var apiUrl = "http://api.openweathermap.org/data/2.5/weather?q=";
    $("button#forecast").on("click", function(){
      var city = $("input#city").val();
      $.get(apiUrl + city + "&APPID=" + apiKey, function(data){
        console.log(data)
        var tempMin = toCelcius(data.main.temp_min);
        var tempMax = toCelcius(data.main.temp_max);
        $("ol.myCity").append("<li>"+city + " - Temp Min: 0C"+tempMin+" to "+tempMax+" Max 0C - Wind Speed "+data.wind.speed+" m/s</li>");
      })
    })

    $("button#reset").on("click",function(){
      $("ol.myCity").empty();
      $("span#forecastDays").text("");
      $("input#city").val("");
    })

  })
