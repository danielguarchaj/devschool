


var toCelcius = function(kelvin){
  var celcius = kelvin - 273.15;
  return celcius.toFixed(2);
}

var currentDayWeather = function(city){
  var response = "";
  debugger
  $.get(apiUrl16Days + city + apiKey, function(data){
    console.log(data);
    var tempMin = toCelcius(data.main.temp_min);
    var tempMax = toCelcius(data.main.temp_max);
    return response = "City: "+city+" - Temp Min: "+tempMin+" to "+tempMax+" - Wind Speed: "+data.wind.speed+" m/s.";
  })

  return response;
}

var dayWeather = function(weather){

  

}
