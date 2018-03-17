var requestURL = 'http://api.wunderground.com/api/2bd3e0c1308e8f04/conditions/q/TX/Greenville.json';
/** to do both in one, combine in URL http://api.wunderground.com/api/...API key.../conditions/forecast/q/MN/Franklin.json **/


var request = new XMLHttpRequest();


request.open('GET', requestURL, true);
request.send();



request.onload = function () {

    var franklinWeather = JSON.parse(request.responseText);
    console.log(franklinWeather);

    document.getElementById('cweather2').innerHTML = franklinWeather.current_observation.weather;

    document.getElementById('ctemp2').innerHTML = franklinWeather.current_observation.temp_f;

    document.getElementById('wind2').innerHTML = franklinWeather.current_observation.wind_mph;


    document.getElementById('w_icon2').src = franklinWeather.current_observation.icon_url;

}


var requestSec = new XMLHttpRequest();

requestSec.open('GET', 'http://api.wunderground.com/api/2bd3e0c1308e8f04/forecast/q/MN/Franklin.json', true);
requestSec.send();

requestSec.onload = function () {

    var franklinForecast = JSON.parse(requestSec.responseText);
    console.log(franklinForecast);
    document.getElementById('forecastInfo2').innerHTML = franklinForecast.forecast.txt_forecast.forecastday["0"].fcttext;

}
