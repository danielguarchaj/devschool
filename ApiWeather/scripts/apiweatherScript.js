


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

  if(weather==="Rain") return "Images/rain.png"
  else if(weather==="Clear") return "Images/sun.jpg"
  else if(weather==="Clouds") return "Images/cloud.jpg"
  else if(weather==="Snow") return "Images/snow.jpg"

}
