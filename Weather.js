var weather;
var data;
var api ="https://api.openweathermap.org/data/2.5/weather?q=";
var apiKey="&appid=ba4745fd0d28d4a9e6be7581246a3e27";
var units="&units=metric"
var hours = (new Date()).getHours();
isNight();
setup();


function isNight(){
  if (hours > 7 && hours < 19) {
    document.body.classList += "day" ;
} else {
    document.body.classList +="night";
}
}


function setup () {
document.getElementById("submit").onclick = function() {
    city = document.getElementById("City").value;
    askWeather();   
   }
          
    } 
    
function askWeather(){
    var url = api + city + apiKey + units;
    console.log(url);
    document.getElementById('c').innerText = city;

    fetch(url)
    .then(function(resp) {
    return resp.json(); 
    })
    
    .then(function(json) { 
      data = json;
      weather = data.main.temp;
      document.getElementById('t').innerText = data.main.temp.toFixed(1) + "\u00B0 and it's "  +  data.weather[0].main;
      // .toFixed(1) is for 1 decimal after temp
    })
    .catch (console.log("Error!!"));
  
};
