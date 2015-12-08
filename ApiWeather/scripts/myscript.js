$(document).ready(function(){
    var apiKey = "025abfe602c79e92f4aab34daca7f7a1";
    var apiUrl = "http://api.openweathermap.org/data/2.5/weather?q=";

    $("button#forecast").on("click", function(){
      var city = $("input#city").val();

      $.get(apiUrl + city + "&APPID=" + apiKey, function(data){
        console.log(data)
        var tempMin = toCelcius(data.main.temp_min);
        var tempMax = toCelcius(data.main.temp_max);

        $("span#dayNo").text(1);
        $("span#cityName").text(city);
        $("span#tempLow").text(tempMin);
        $("span#tempHigh").text(tempMax);
        $("span#windSpeed").text(data.wind.speed + " m/s");
      })

    })
  })
